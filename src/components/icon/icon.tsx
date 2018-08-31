import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
  SchemaElement,
} from '../../core';

export interface IconProps extends ChonComponentIconProps {
  icon: string;
}

export interface IconComponentSchemaElementDict
  extends GeneralComponentSchemaElementDict {
  Content: ComponentSchemaElement<any>;
}

export interface ChonComponentIconProps extends ChonComponentProps {
  icon?: string;
}

export class Icon extends ChonComponent<
  IconProps,
  IconComponentSchemaElementDict
> {
  constructor(props: IconProps) {
    super(props);
    this.compose();
  }

  @SchemaElement
  Content = (props: {children: React.ReactNode} & any): JSX.Element => (
    <div>{props.children}</div>
  );

  render(): React.ReactNode {
    return <this.components {...this.props} />;
  }
}
