import * as React from 'react';
import Text, {TextProps} from './text';
import Icon, {IconProps} from './icon';
import {
  ChonComponent,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
  ChonComponentProps,
} from '../common/index';

export interface ButtonComponentSchemaElemDict extends ComponentSchemaElemDict {
  Text: ComponentSchemaElem<TextProps>;
  Icon: ComponentSchemaElem<IconProps>;
}

export interface ButtonProps extends ChonComponentProps {
  onClick?: () => any;
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

  render() {
    let {
      props: {children},
    } = this;

    let WrappedIcon = (props: IconProps) => <Icon {...props} />;
    let WrappedText = (
      props: TextProps & {children: React.ReactNode} & any,
    ) => (
      <Text {...props}>
        {children ? children : props.children ? props.children : null}
      </Text>
    );

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    console.log();
    return <button onClick={this.handleClick}>{component}</button>;
  }
}
