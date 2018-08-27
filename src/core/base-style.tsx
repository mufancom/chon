import _ from 'lodash';
import * as React from 'react';
import {Dict} from 'tslang';

export abstract class ChonStyleSchema {
  currentMapping: Map<string, ChonStyleSchema> = new Map();

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

  getLPadding(): string {
    return this.opts.lPadding || '15px 20px';
  }

  getMPadding(): string {
    return this.opts.mPadding || '10px 16px';
  }

  getSPadding(): string {
    return this.opts.sPadding || '5px 10px';
  }

  getBorderRadius(): string {
    return this.opts.borderRadius || '0';
  }

  Button(): React.CSSProperties {
    return {
      backgroundColor: this.opts.primaryColor,
      color: '#FFF',
      padding: this.getMPadding(),
      borderRadius: this.getBorderRadius(),
    };
  }

  Input(): React.CSSProperties {
    return {
      border: `1px solid ${this.opts.primaryColor}`,
      borderRadius: this.getBorderRadius(),
      padding: this.getSPadding(),
      margin: '2px',
      width: '190px',
    };
  }
}

interface ChonStyleSchemaContext {
  schema: ChonStyleSchema;
  mapping: Dict<string>;
  mappingConfig: Dict<Dict<string>>;
  schemas: Dict<ChonStyleSchema>;
}

export let {
  Provider: StyleContextProvider,
  Consumer: StyleContextConsumer,
} = React.createContext<ChonStyleSchemaContext>(undefined!);

export const context = {
  Provider: StyleContextProvider,
  Consumer: StyleContextConsumer,
};

interface StyleProviderProps {
  config?: ChonStyleSchemaConfig;
  schema?: string;
}

export class StyleProvider extends React.Component<StyleProviderProps> {
  getStylesFromConfig(): ChonStyleSchema {
    // const {styleType} = this.props;
    return defaultSchema;
  }

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

export function applyDefaultStyleSchema(styleSchema: ChonStyleSchema): void {
  defaultSchema = styleSchema;

  let {Provider, Consumer} = React.createContext(styleSchema);
  StyleContextProvider = Provider;
  StyleContextConsumer = Consumer;
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
