import {observer} from 'mobx-react';
import React from 'react';

import {
  AbstractChonComponent,
  ChonComponent,
  ChonComposer,
  ChonElement,
  IChonComponentProps,
} from '../../../core';

declare global {
  namespace Chon {
    interface IconTypeToProps {}

    type IconType = keyof IconTypeToProps;

    interface ComposerDict {
      Icon: ChonComposer<IconUnion>;
    }
  }
}

export type IconProps<TType extends Chon.IconType> = IChonComponentProps<
  Chon.IconTypeToProps,
  TType
>;

export type IconUnion<
  TType extends Chon.IconType = Chon.IconType
> = TType extends Chon.IconType ? Icon<TType> : never;

@ChonComponent()
export class Icon<
  TType extends Chon.IconType = Chon.IconType
> extends AbstractChonComponent<IconProps<TType>> {
  @ChonElement()
  Content: ChonElement = () => {
    return <div>{this.props.children}</div>;
  };
}
