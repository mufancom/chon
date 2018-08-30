import Color from 'color';

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

  Button = (type: 'default' | 'ghost'): string => {
    if (!type) {
      type = 'default';
    }

    switch (type) {
      case 'default':
        return `
          padding: ${this.options.baseVerticalPadding}px
            ${this.options.baseHorizontalPadding}px;
          background-color: ${this.options.primaryColor};
          border-radius: ${this.options.borderRadius || '10px'};
          color: ${this.isDark(this.options.primaryColor) ? '#FFF' : '#000'};
        `;
      case 'ghost':
        return `
          padding: ${this.options.baseVerticalPadding}px
            ${this.options.baseHorizontalPadding}px;
          background-color: #fff;
          border-radius: ${this.options.borderRadius || '10px'};
          color: ${this.options.primaryColor};
        `;
    }
  };

  Input = (): string => {
    return `
      padding: ${this.options.baseVerticalPadding}px
      ${this.options.baseHorizontalPadding}px;
      border: 1px solid ${this.options.primaryColor};
      border-radius: ${this.options.borderRadius};
    `;
  };
}
