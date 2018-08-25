import * as React from 'react';

import {Color} from 'csstype';

export interface ChonStyleOptions {
  primaryColor: Color;
  accentColor: Color;
  borderRadius?: string;
  lPadding?: string;
  mPadding?: string;
  sPadding?: string;
}

export class ChonStyle {
  mapping: Map<string, ChonStyle> = new Map();

  private opts: ChonStyleOptions;

  constructor(opts: ChonStyleOptions) {
    this.opts = opts;
  }

  setMapping(mapping: Map<string, ChonStyle>): void {
    this.mapping = mapping;
  }

  addMapping(name: string, schema: ChonStyle): void {
    this.mapping.set(name, schema);
  }

  removeMapping(name: string): void {
    this.mapping.delete(name);
  }

  getSchema(name: string): ChonStyle | undefined {
    return this.mapping.get(name);
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

let defaultSchema = new ChonStyle({
  primaryColor: '#1E90FF',
  accentColor: '#1D7F5F',
});

export let {
  Provider: StyleContextProvider,
  Consumer: StyleContextConsumer,
} = React.createContext<ChonStyle>(defaultSchema);

export const context = {
  Provider: StyleContextProvider,
  Consumer: StyleContextConsumer,
};

interface StyleProviderProps {
  styleType?: string;
}

export class StyleProvider extends React.Component<StyleProviderProps> {
  getStylesFromConfig(): ChonStyle {
    // const {styleType} = this.props;
    return defaultSchema;
  }

  render(): React.ReactNode {
    return (
      <StyleContextConsumer>
        {schema => {
          const s = schema.getSchema(this.props.styleType || '') || schema;
          return (
            <StyleContextProvider value={s || defaultSchema}>
              {this.props.children}
            </StyleContextProvider>
          );
        }}
      </StyleContextConsumer>
    );
  }
}

export function applyDefaultStyleSchema(styleSchema: ChonStyle): void {
  defaultSchema = styleSchema;

  let {Provider, Consumer} = React.createContext(styleSchema);
  StyleContextProvider = Provider;
  StyleContextConsumer = Consumer;
}

export interface StyleSchemaConfig {
  [styleName: string]: ChonStyle;
}
