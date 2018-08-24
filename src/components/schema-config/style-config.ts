import {CSSProperties} from 'react';

import {Color} from 'csstype';

import {ChonStyle, StyleSchemaConfig} from '../common/base-style';

const primaryColor = '#1D7F5F';

class LightStyle implements ChonStyle {
  constructor(public primaryColor: Color, public textColor: Color = '#fff') {}

  Button(): CSSProperties {
    return {
      background: this.primaryColor,
      color: this.textColor,
      padding: '10px 16px',
      borderRadius: '4px',
    };
  }
}

const config: StyleSchemaConfig = {
  default: new LightStyle(primaryColor),
  green: new LightStyle(primaryColor),
  black: new LightStyle('#000'),
};

export default config;
