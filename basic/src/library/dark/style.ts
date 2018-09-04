import {DefaultStyle} from '../default';

export interface DarkStyleOptions {
  foreground: string;
  background: string;
}

export class DarkStyle extends DefaultStyle {
  getReversedForeground(): string {
    return this.getForeground();
  }

  getReversedBackground(): string {
    return this.getBackground();
  }
}
