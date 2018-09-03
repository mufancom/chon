import {AbstractChonStyle} from 'chon';
import {style} from 'typestyle';

export interface DefaultStyleOptions {
  foreground: string;
  background: string;
}

export class DefaultStyle extends AbstractChonStyle {
  private foreground: string;
  private background: string;

  constructor({foreground, background}: DefaultStyleOptions) {
    super();

    this.foreground = foreground;
    this.background = background;
  }

  getBoxStyle(): string {
    return style({});
  }

  getForeground(): string {
    return this.foreground;
  }

  getBackground(): string {
    return this.background;
  }
}
