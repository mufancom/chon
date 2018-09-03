import {ReactNode, SFC} from 'react';
import {KeyOfValueWithType} from 'tslang';

import {
  AbstractChonComponent,
  ChonComponentTypeType,
  ChonElementProps,
} from '../chon-component';

export type ChonElementKeyType<
  TChonComponent extends AbstractChonComponent
> = Exclude<
  Extract<KeyOfValueWithType<TChonComponent, () => ReactNode>, string>,
  'render'
>;

export type ChonElementDictType<
  TChonComponent extends AbstractChonComponent
> = {[K in ChonElementKeyType<TChonComponent>]: SFC<ChonElementProps>};

export type ChonTypeComposer<TChonComponent extends AbstractChonComponent> = (
  elements: ChonElementDictType<TChonComponent>,
  component: TChonComponent,
) => ReactNode;

export type ChonComponentComposerDict<
  TChonComponent extends AbstractChonComponent
> = {
  [TType in ChonComponentTypeType<TChonComponent>]: ChonTypeComposer<
    Extract<TChonComponent, {props: {type?: TType}}>
  >
};

export class ChonComposer<TChonComponent extends AbstractChonComponent> {
  private constructor(
    private componentComposerDict: ChonComponentComposerDict<TChonComponent>,
    private defaultType: ChonComponentTypeType<TChonComponent>,
  ) {}

  compose(
    elements: ChonElementDictType<TChonComponent>,
    component: TChonComponent,
  ): ReactNode {
    let {type = this.defaultType} = component.props;

    let composer = (this.componentComposerDict[
      type as ChonComponentTypeType<TChonComponent>
    ] as ChonTypeComposer<any>) as ChonTypeComposer<TChonComponent>;
    return composer(elements, component);
  }

  derive(
    composers: Partial<ChonComponentComposerDict<TChonComponent>>,
    defaultType = this.defaultType,
  ): this {
    return new ChonComposer(
      {
        ...(this.componentComposerDict as object),
        ...(composers as object),
      } as ChonComponentComposerDict<TChonComponent>,
      defaultType,
    ) as this;
  }

  static create<TChonComponent extends AbstractChonComponent>(
    composers: ChonComponentComposerDict<TChonComponent>,
    defaultType: ChonComponentTypeType<TChonComponent>,
  ): ChonComposer<TChonComponent> {
    return new ChonComposer(composers, defaultType);
  }
}
