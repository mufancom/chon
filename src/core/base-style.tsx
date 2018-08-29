import _ from 'lodash';
import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';
import {Dict, KeyOfValueWithType} from 'tslang';

export abstract class ChonStyleSchema {
  abstract Button(): string;
  abstract Input(): string;

  getComponentStyleByName<TKey extends KeyOfValueWithType<this, () => string>>(
    name: TKey,
  ): this[TKey] {
    return this[name];
  }
}

type StyleWrapper = (
  styleLessComponent: React.ComponentType,
  componentName: KeyOfValueWithType<ChonStyleSchema, () => string>,
) => StyledComponentClass<{}, {}>;

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
    // {default: 'default', light：'light', dark: 'dark'}

    // <StyleProvider schema="light">

    // {
    //   ...{default: 'default', light：'light', dark: 'dark'}
    //   ...{reverse: 'dark'}
    // }

    // within schema light
    // {default: 'default', light：'light', dark: 'dark', reverse: 'dark'}

    // <StyleProvider schema="reverse">

    // {
    //   ...{default: 'default', light：'light', dark: 'dark', reverse: 'dark'}
    //   ...{reverse: 'light'}
    // }

    // within schema dark
    // {default: 'default', light：'light', dark: 'dark', reverse: 'light'}

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

          styleWrapper = (styleLessComponent, componentName) => {
            let componentStyle = currentSchema!.getComponentStyleByName(
              componentName,
            );

            return styled(styleLessComponent)({} as any, componentStyle());
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
