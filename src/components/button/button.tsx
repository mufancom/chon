import * as React from 'react';
import {ChonText, ChonTextProps} from '../text';
import {ChonIcon, ChonIconProps} from '../icon';
import {
  ChonComponent,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
  ChonComponentProps,
} from '../common/index';

export interface ButtonComponentSchemaElemDict extends ComponentSchemaElemDict {
  Text: ComponentSchemaElem<ChonTextProps>;
  Icon: ComponentSchemaElem<ChonIconProps>;
}

export interface ButtonProps extends ChonComponentProps {
  onClick?: () => any;
}

export default class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElemDict
> {
  static Icon = (props: ChonIconProps) => React.createElement(ChonIcon, props);
  static Text = (props: ChonTextProps) => React.createElement(ChonText, props);

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

  render() {
    let {
      props: {children},
    } = this;
    let {Icon, Text} = Button;

    let WrappedIcon = () => <Icon />;
    let WrappedText = () => <Text>{children}</Text>;

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    console.log();
    return <button onClick={this.handleClick}>{component}</button>;
  }
}
