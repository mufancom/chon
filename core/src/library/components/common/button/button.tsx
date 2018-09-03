import React, {MouseEvent, ReactNode} from 'react';

import {
  AbstractChonComponent,
  ChonComponent,
  ChonComposer,
  ChonElement,
  IChonComponentProps,
} from '../../../core';

declare global {
  namespace Chon {
    interface ButtonTypeToProps {}

    type ButtonType = keyof ButtonTypeToProps;

    interface ComposerDict {
      Button: ChonComposer<ButtonUnion>;
    }
  }
}

export type ButtonProps<TType extends Chon.ButtonType> = IChonComponentProps<
  Chon.ButtonTypeToProps,
  TType
> & {
  disabled?: boolean;
  onClick?(this: Window, event: MouseEvent): void;
};

export type ButtonUnion<
  TType extends Chon.ButtonType = Chon.ButtonType
> = TType extends Chon.ButtonType ? Button<TType> : never;

@ChonComponent()
export class Button<
  TType extends Chon.ButtonType = Chon.ButtonType
> extends AbstractChonComponent<ButtonProps<TType>> {
  @ChonElement()
  Content: ChonElement = () => {
    return this.props.children;
  };

  render(): ReactNode {
    let {className, disabled, onClick} = this.props;

    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        {super.render()}
      </button>
    );
  }
}
