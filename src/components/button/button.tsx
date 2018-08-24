import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
} from '../common/index';
import {Icon, IconProps} from '../icon';
import {Text, TextProps} from '../text';

export interface ButtonComponentSchemaElemDict extends ComponentSchemaElemDict {
  Text: ComponentSchemaElem<TextProps>;
  Icon: ComponentSchemaElem<IconProps>;
}

export interface ButtonProps extends ChonComponentProps {
  icon?: string | IconDefinition;
  onClick?(): any;
}

export default class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElemDict
> {
  // static Icon = (props: IconProps) => React.createElement(_Icon, props);
  // static Text = (props: TextProps) => React.createElement(_Text, props);

  handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const {onClick} = this.props;

    if (onClick) {
      (onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)(e);
    }
  };

  render(): JSX.Element {
    let {
      props: {children},
    } = this;

    let WrappedIcon = (props: IconProps): JSX.Element => (
      <Icon {...props} icon={this.props.icon || props.icon || faStroopwafel} />
    );
    let WrappedText = (
      props: TextProps & {children: React.ReactNode} & any,
    ): JSX.Element => (
      <Text {...props}>{children || props.children || undefined}</Text>
    );

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    return <button onClick={this.handleClick}>{component}</button>;
  }

  // static Icon = (
  //   props: ChonIconProps,
  // ): React.ComponentElement<ChonIconProps, Icon> =>
  //   React.createElement(Icon, props);

  // static Text = (
  //   props: ChonTextProps,
  // ): React.ComponentElement<ChonTextProps, Text> =>
  //   React.createElement(Text, props);
}
