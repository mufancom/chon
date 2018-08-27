import {ChonStyleSchema} from '../../src/core';

export class ThemeColorStyleSchema extends ChonStyleSchema {
  get Button(): React.CSSProperties {
    return {
      padding: '10px 16px',
      background: this.primaryColor,
    };
  }

  get Input(): React.CSSProperties {
    return {
      padding: '10px 16px',
    };
  }
}

const green = new ThemeColorStyleSchema('#1D7F5F');
const black = new ThemeColorStyleSchema('#000');
const blue = new ThemeColorStyleSchema('#039BE5');

const config = {
  default: green,

  schemas: {
    default: green,
    light: blue,
    dark: black,
  },

  mapping: {
    light: {
      reverse: 'dark',
    },
    dark: {
      reverse: 'light',
    },
  },
};

export default config;
