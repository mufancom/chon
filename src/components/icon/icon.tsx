import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
} from '../../core';

export interface IconProps extends ChonComponentProps, ChonComponentIconProps {}

export interface IconComponentSchemaElementDict {
  Content: ComponentSchemaElement<IconProps>;
}

type X = {
  [K in keyof IconComponentSchemaElementDict]: Promise<
    IconComponentSchemaElementDict[K]
  >
};

export interface IconDefinition {
  name: string;
}

export interface ChonComponentIconProps {
  icon: string | IconDefinition;
}

export class Icon extends ChonComponent<
  IconProps,
  IconComponentSchemaElementDict
> {
  render(): React.ReactNode {
    return (
      <FontAwesomeIcon
        {...Object.assign({icon: faStroopwafel}, this.props as any)}
      />
    );
  }
}
