import _ from 'lodash';
import React, {
  Component,
  ComponentType,
  ReactNode,
  SFC,
  createContext,
} from 'react';

import {AbstractChonSchema, ChonSchemaStatic} from '../schema';

export type SchemaDict<TSchemaName extends string = string> = {
  [TName in TSchemaName | 'default']: ChonSchemaStatic
};

export type SchemaMapping<TSchemaName extends string = string> = {
  [TName in TSchemaName]: TSchemaName
};

export type SchemaMappingDict<TSchemaName extends string = string> = {
  [TName in TSchemaName]?: SchemaMapping<TSchemaName>
};

export interface ThemeConfig<TSchemaName extends string = string> {
  schemas: SchemaDict<TSchemaName>;
  mapping?: SchemaMappingDict<TSchemaName>;
}

export type SchemaNameType<
  TThemeConfig extends ThemeConfig
> = TThemeConfig extends ThemeConfig<infer TSchemaName> ? TSchemaName : never;

export interface ThemeResult<TThemeConfig extends ThemeConfig> {
  ThemeProvider: ComponentType;
  SwitchSchema: ComponentType<SwitchSchemaProps<SchemaNameType<TThemeConfig>>>;
}

export interface SwitchSchemaProps<TSchemaName extends string = string> {
  name: TSchemaName;
}

interface ThemeContext {
  activeSchema: AbstractChonSchema;
  schemas: SchemaDict;
  activeMapping: SchemaMapping;
  mapping: SchemaMappingDict;
}

const {Provider, Consumer} = createContext<ThemeContext>(undefined!);

export function theme<TThemeConfig extends ThemeConfig>(
  config: TThemeConfig,
): ThemeResult<TThemeConfig> {
  let context: ThemeContext = {
    activeSchema: config.schemas.default.create(undefined),
    schemas: config.schemas,
    activeMapping: _.mapValues(config.schemas, (_, key) => key),
    mapping: config.mapping || {},
  };

  class ThemeProvider extends Component {
    render(): ReactNode {
      return <Provider value={context}>{this.props.children}</Provider>;
    }
  }

  class SwitchSchema<TSchemaName extends string> extends Component<
    SwitchSchemaProps<TSchemaName>
  > {
    render(): ReactNode {
      return (
        <Consumer>
          {context => {
            let {
              activeSchema,
              schemas: schemaDict,
              activeMapping,
              mapping,
            } = context;

            let {name, children} = this.props;

            name = activeMapping[name] as TSchemaName;

            let SchemaClass = schemaDict[name] || schemaDict.default;

            activeSchema = SchemaClass.create(activeSchema);

            activeMapping = {
              ...activeMapping,
              ...(mapping[name] as SchemaMapping),
            };

            let nestedContext: ThemeContext = {
              activeSchema,
              schemas: schemaDict,
              activeMapping,
              mapping,
            };

            return <Provider value={nestedContext}>{children}</Provider>;
          }}
        </Consumer>
      );
    }
  }

  return {
    ThemeProvider,
    SwitchSchema,
  };
}

export interface StyleConsumerProps {
  children(style: Chon.Style): ReactNode;
}

export const StyleConsumer: SFC<StyleConsumerProps> = ({children}) => {
  return <Consumer>{({activeSchema: {style}}) => children(style)}</Consumer>;
};

export {Consumer as SchemaConsumer};
