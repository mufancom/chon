import * as React from 'react';

import {Color} from 'csstype';

import config from '../schema-config/style-config';

export const {Provider, Consumer} = React.createContext<ChonStyle>(
  config.default,
);

interface StyleProviderProps {
  styleType?: string;
}

export class StyleProvider extends React.Component<StyleProviderProps> {
  getStylesFromConfig(): ChonStyle {
    const {styleType} = this.props;

    if (styleType && config[styleType]) {
      return config[styleType];
    } else if (config.default) {
      return config.default;
    } else {
      throw new Error(`cannot find style config ${styleType}`);
    }
  }

  render(): React.ReactNode {
    return (
      <Provider value={this.getStylesFromConfig()}>
        {this.props.children}
      </Provider>
    );
  }
}

export interface ChonStyle {
  primaryColor: Color;
  textColor?: Color;

  Button(): React.CSSProperties;
  Input(): React.CSSProperties;
}

export interface StyleSchemaConfig {
  [styleName: string]: ChonStyle;
}
