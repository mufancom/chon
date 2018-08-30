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

export interface ChonComponentIconProps extends ChonComponentProps {
  icon?: string;
}

export class Icon extends ChonComponent<
  IconProps,
  IconComponentSchemaElementDict
> {
  protected schemaElementDict: IconComponentSchemaElementDict;

  constructor(props: IconProps) {
    super(props);
    this.schemaElementDict = {
      Content: this.Content,
    };
    this.compose();
  }

  Content = (props: {children: React.ReactNode} & any): JSX.Element => (
    <div>{props.children}</div>
  );

  render(): React.ReactNode {
    return <this.components {...this.props} />;
  }
}
