import _ from 'lodash';
import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';
import {Dict, KeyOfValueWithType} from 'tslang';

import {ChonComponent, ChonComponentProps} from './base-component';

export abstract class ChonStyleSchema {
  abstract Button(...args: any[]): string;
  abstract Input(): string;

  getComponentStyleByName<TKey extends keyof this>(name: TKey): any {
    return this[name];
  }
}

type StyleWrapper = (
  styleLessComponent: React.ComponentType | ChonComponent,
  componentName: StyledComponentName,
  type?: string,
) => StyledComponentClass<{}, {}>;

type StyledComponentName = KeyOfValueWithType<ChonStyleSchema, () => string>;

interface ChonStyleSchemaContext {
  mapping: Dict<string>;
  mappingConfig: Dict<Dict<string>>;
  schemas: Dict<ChonStyleSchema>;
  styleWrapper?: StyleWrapper;
}

export const {
  Provider: StyleContextProvider,
  Consumer: StyleContextConsumer,
} = React.createContext<ChonStyleSchemaContext>(undefined!);

interface StyleProviderProps {
  config?: ChonStyleSchemaConfig;
  schema?: string;
}

export class StyleProvider extends React.Component<StyleProviderProps> {
  render(): React.ReactNode {
    return (
      <StyleContextConsumer>
        {context => {
          let isRoot = false;

          if (!context) {
            context = this.buildContext();
            isRoot = true;
          }

          let {schemas: schemaDict, mapping, mappingConfig} = context;

          let {schema: schemaName, children} = this.props;
          let currentSchema: ChonStyleSchema | undefined;
          let styleWrapper: StyleWrapper;

          if (schemaName) {
            schemaName = mapping[schemaName];
            currentSchema = schemaDict[schemaName]
              ? schemaDict[schemaName]
              : schemaDict.default;

            if (!isRoot && !currentSchema) {
              throw new Error(`schema ${this.props.schema} cannot be found`);
            }

            mapping = {...mapping, ...mappingConfig[schemaName]};
          } else {
            currentSchema = schemaDict.default;
          }

          styleWrapper = (styleLessComponent, componentName, type) => {
            let componentStyle = currentSchema!.getComponentStyleByName(
              componentName,
            );

            if (!componentStyle) {
              throw new Error(
                `cannot find StyleComponent defined with name "${componentName}" `,
              );
            }

            return styled(styleLessComponent as React.ComponentType)(
              {} as any,
              componentStyle(type),
            );
          };

          return (
            <StyleContextProvider
              value={{
                styleWrapper,
                schemas: schemaDict,
                mapping,
                mappingConfig,
              }}
            >
              {children}
            </StyleContextProvider>
          );
        }}
      </StyleContextConsumer>
    );
  }

  private buildContext(): ChonStyleSchemaContext {
    let config = this.props.config;

    if (!config) {
      throw new Error('Property `config` is required for root `StyleProvider`');
    }

    return {
      schemas: config.schemas,
      mapping: _.mapValues(config.schemas, (_, key) => key),
      mappingConfig: config.mapping,
    };
  }
}

export interface ChonStyleSchemaConfig<
  TSchemaName extends string = string,
  TSchemaAlias extends string = string
> {
  default: ChonStyleSchema;
  schemas: {[K in TSchemaName]: ChonStyleSchema};
  mapping: {
    [K in TSchemaName]: {[K in TSchemaName | TSchemaAlias]: TSchemaName}
  };
}

export function chonStyle(
  name?: StyledComponentName,
): (target: React.ComponentType) => any {
  return target => {
    return class extends React.Component<ChonComponentProps> {
      shouldReCompose = true;
      StyledComponent!: React.ComponentType;

      componentWillReceiveProps(nextProps: ChonComponentProps): void {
        if (
          nextProps.type === this.props.type &&
          nextProps.compType === this.props.compType
        ) {
          this.shouldReCompose = false;
        } else {
          this.shouldReCompose = true;
        }
      }

      render() {
        return (
          <StyleContextConsumer>
            {({styleWrapper}) => {
              if (this.shouldReCompose) {
                this.StyledComponent = styleWrapper!(
                  target,
                  name ? name : (target.name as StyledComponentName),
                  this.props.type,
                );
              }

              return <this.StyledComponent {...this.props} />;
            }}
          </StyleContextConsumer>
        );
      }
    };
  };
}
