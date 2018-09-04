import {Icon} from 'chon';
import {style} from 'typestyle';

declare global {
  namespace Chon { interface Style extends DefaultStyle {} }
}

export interface DefaultStyleOptions {
  foreground: string;
  background: string;
}

export type ButtonSize = 'normal' | 'compact';

export interface GetButtonStyleOptions {
  size: ButtonSize | undefined;
  hasPadding?: boolean;
}

export class DefaultStyle {
  private foreground: string;
  private background: string;

  constructor({foreground, background}: DefaultStyleOptions) {
    this.foreground = foreground;
    this.background = background;
  }

  getForeground(): string {
    return this.foreground;
  }

  getBackground(): string {
    return this.background;
  }

  getReversedForeground(): string {
    return this.getBackground();
  }

  getReversedBackground(): string {
    return this.getForeground();
  }

  getButtonStyle({
    size = 'normal',
    hasPadding = true,
  }: GetButtonStyleOptions): string {
    let height: number;
    let padding: number;
    let fontSize: number;

    switch (size) {
      case 'normal':
        height = 24;
        padding = 12;
        fontSize = 14;
        break;
      case 'compact':
        height = 20;
        padding = 10;
        fontSize = 12;
        break;
      default:
        throw new Error('Unknown button size');
    }

    return style({
      border: 0,
      borderRadius: height / 2,
      height,
      minWidth: height,
      paddingLeft: hasPadding ? padding : 0,
      paddingRight: hasPadding ? padding : 0,
      fontSize,
      color: this.getReversedForeground(),
      backgroundColor: this.getReversedBackground(),

      $nest: {
        '&:hover': {
          backgroundColor: 'red',
        },
        [`> ${Icon}`]: {
          fontSize: fontSize * 0.8,
          $nest: {
            '&:not(:last-child)': {
              marginRight: 4,
            },
          },
        },
      },
    });
  }
}
