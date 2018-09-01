import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
  SchemaElement,
} from '../../core';
import {chonStyle} from '../../core/base-style';
import {ChonComponentIconProps, Icon} from '../icon';
import {Text, TextProps} from '../text';

export interface ButtonComponentSchemaElementDict
  extends GeneralComponentSchemaElementDict {
  Text: ComponentSchemaElement<TextProps>;
  Icon: ComponentSchemaElement<ChonComponentIconProps>;
}

export interface ButtonProps
  extends ChonComponentProps,
    ChonComponentIconProps {
  type?: 'default' | 'ghost';
  className?: string;
  onClick?(): void;
}

@chonStyle()
export class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElementDict
> {
  constructor(props: ButtonProps) {
    super(props);
  }

  @SchemaElement
  Icon = (props: ChonComponentIconProps): JSX.Element => (
    <Icon {...props} icon={this.props.icon || props.icon || ''} />
  );

  @SchemaElement
  Text = (
    props: TextProps & {children: React.ReactNode} & any,
  ): JSX.Element => (
    <Text {...props}>{this.props.children || props.children}</Text>
  );

  render(): JSX.Element {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        <this.components />
      </button>
    );
  }

  private handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const {onClick} = this.props;

    if (onClick) {
      (onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)(e);
    }
  };
}
