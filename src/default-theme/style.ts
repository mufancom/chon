import Color from 'color';
import * as React from 'react';

import {Color as ColorType} from 'csstype';

import {ChonStyleSchema} from '../core';

export interface DefaultStyleSchemaOptions {
  primaryColor: ColorType;
  accentColor: ColorType;
  borderRadius?: string;
  baseVerticalPadding?: number;
  baseHorizontalPadding?: number;
}

export class DefaultStyleSchema extends ChonStyleSchema {
  constructor(private options: DefaultStyleSchemaOptions) {
    super();
  }

  isDark(color: ColorType): boolean {
    const c = Color(color);
    return c.isDark();
  }

  get Button(): React.CSSProperties {
    return {
      padding: `${this.options.baseVerticalPadding}px
        ${this.options.baseHorizontalPadding}px`,
      backgroundColor: this.options.primaryColor,
      borderRadius: this.options.borderRadius,
      color: this.isDark(this.options.primaryColor) ? '#FFF' : '#000',
    };
  }

  get Input(): React.CSSProperties {
    return {
      padding: `${this.options.baseVerticalPadding}px
        ${this.options.baseHorizontalPadding}px`,
      border: `1px solid ${this.options.primaryColor}`,
      borderRadius: this.options.borderRadius,
    };
  }
}
