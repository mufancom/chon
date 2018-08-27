import _ from 'lodash';
import * as React from 'react';
import {Dict} from 'tslang';

import {Color} from 'csstype';

export abstract class ChonStyleSchema {
  currentMapping: Map<string, ChonStyleSchema> = new Map();

  constructor(public primaryColor: Color) {}

  setMapping(mapping: Map<string, ChonStyleSchema>): void {
    this.currentMapping = mapping;
  }

  addMapping(name: string, schema: ChonStyleSchema): void {
    this.currentMapping.set(name, schema);
  }

  removeMapping(name: string): void {
    this.currentMapping.delete(name);
  }

  getSchema(name: string): ChonStyleSchema {
    let schema = this.currentMapping.get(name);

    if (!schema) {
      throw new Error(`Unknown style schema "${name}"`);
    }

    return schema;
  }

  abstract get Button(): React.CSSProperties;
  abstract get Input(): React.CSSProperties;
}

interface ChonStyleSchemaContext {
  schema: ChonStyleSchema;
  mapping: Dict<string>;
  mappingConfig: Dict<Dict<string>>;
  schemas: Dict<ChonStyleSchema>;
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
          if (!context) {
            context = this.buildContext();
          }

          let {schema, schemas: schemaDict, mapping, mappingConfig} = context;

          let {schema: schemaName, children} = this.props;

          if (schemaName) {
            schemaName = mapping[schemaName];
            schema = schemaDict[schemaName];
            mapping = {...mapping, ...mappingConfig[schemaName]};
          }

          return (
            <StyleContextProvider
              value={{
                schema,
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
      schema: config.default,
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
