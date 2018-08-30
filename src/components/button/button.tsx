import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
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
export default class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElementDict
> {
  protected schemaElementDict: ButtonComponentSchemaElementDict;

  constructor(props: ButtonProps) {
    super(props);
    this.schemaElementDict = {
      Icon: this.Icon,
      Text: this.Text,
    };
  }

  Icon = (props: ChonComponentIconProps): JSX.Element => (
    <Icon {...props} icon={this.props.icon || props.icon || ''} />
  );

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
