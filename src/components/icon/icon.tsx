import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
} from '../../core';

export interface IconProps extends ChonComponentIconProps {
  icon: string;
}

export interface IconComponentSchemaElementDict
  extends GeneralComponentSchemaElementDict {
  Content: ComponentSchemaElement<any>;
}

// type X = {
//   [K in keyof IconComponentSchemaElementDict]: Promise<
//     IconComponentSchemaElementDict[K]
//   >
// };

export interface ChonComponentIconProps extends ChonComponentProps {
  icon?: string;
}

export class Icon extends ChonComponent<
  IconProps,
  IconComponentSchemaElementDict
> {
  render(): React.ReactNode {
    let Content = (props: {children: React.ReactNode} & any): JSX.Element => (
      <div>{props.children}</div>
    );
    return this.schema.compose(
      {Content},
      this.props,
    );
  }
}
