import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
} from '../../core';

export interface IconProps extends ChonComponentIconProps {
  icon: string | IconDefinition;
}

export interface IconComponentSchemaElementDict
  extends GeneralComponentSchemaElementDict {
  Content: ComponentSchemaElement<ChonComponentIconProps>;
}

// type X = {
//   [K in keyof IconComponentSchemaElementDict]: Promise<
//     IconComponentSchemaElementDict[K]
//   >
// };

export interface IconDefinition {
  name: string;
}

export interface ChonComponentIconProps extends ChonComponentProps {
  icon?: string | IconDefinition;
}

export class Icon extends ChonComponent<
  IconProps,
  IconComponentSchemaElementDict
> {
  render(): React.ReactNode {
    let Content = (): JSX.Element => <span />;
    return this.schema.compose({Content});
  }
}
