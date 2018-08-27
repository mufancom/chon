import {Color} from 'csstype';

import {ChonStyleSchema} from '../../src/core';
import {DefaultStyleSchema} from '../../src/default-theme/style';

export class ThemeColorStyleSchema extends ChonStyleSchema {
  constructor(private primaryColor: Color) {
    super();
    this.primaryColor = primaryColor;
  }

  get Button(): React.CSSProperties {
    return {
      padding: '10px 16px',
      background: this.primaryColor,
    };
  }

  get Input(): React.CSSProperties {
    return {
      padding: '10px 16px',
      border: '1px solid',
    };
  }
}

const black = new ThemeColorStyleSchema('#000');
const green = new DefaultStyleSchema({
  primaryColor: '#1D7F5F',
  accentColor: '#1D7F5F',
  baseVerticalPadding: 10,
  baseHorizontalPadding: 16,
});
const lightGreen = new DefaultStyleSchema({
  primaryColor: '#CCFF90',
  accentColor: '#CCFF90',
  baseVerticalPadding: 10,
  baseHorizontalPadding: 16,
});
const blue = new DefaultStyleSchema({
  primaryColor: '#4285F4',
  accentColor: '#4285F4',
  baseVerticalPadding: 10,
  baseHorizontalPadding: 16,
  borderRadius: '50% 10% / 20% 20%',
});

const config = {
  default: green,

  schemas: {
    default: green,
    green,
    lightGreen,
    blue,
    black,
  },

  mapping: {
    green: {
      reverse: 'lightGreen',
    },
    lightGreen: {
      reverse: 'green',
    },
  },
};

export default config;
