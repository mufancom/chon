import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
} from '../common/index';
import {ChonIcon, ChonIconProps} from '../icon';
import {ChonText, ChonTextProps} from '../text';

export interface ButtonComponentSchemaElemDict extends ComponentSchemaElemDict {
  Text: ComponentSchemaElem<ChonTextProps>;
  Icon: ComponentSchemaElem<ChonIconProps>;
}

export interface ButtonProps extends ChonComponentProps {
  onClick?(): any;
}

export default class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElemDict
> {
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
    let {Icon, Text} = Button;

    let WrappedIcon = (): JSX.Element => <Icon />;
    let WrappedText = (): JSX.Element => <Text>{children}</Text>;

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    return <button onClick={this.handleClick}>{component}</button>;
  }

  static Icon = (
    props: ChonIconProps,
  ): React.ComponentElement<ChonIconProps, ChonIcon> =>
    React.createElement(ChonIcon, props);

  static Text = (
    props: ChonTextProps,
  ): React.ComponentElement<ChonTextProps, ChonText> =>
    React.createElement(ChonText, props);
}
