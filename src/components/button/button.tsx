import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import {
  ChonComponent,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
} from '../../core';
import {StyleContextConsumer} from '../../core/base-style';
import {Icon, IconProps} from '../icon';
import {Text, TextProps} from '../text';

export interface ButtonComponentSchemaElemDict extends ComponentSchemaElemDict {
  Text: ComponentSchemaElem<TextProps>;
  Icon: ComponentSchemaElem<IconProps>;
}

export interface ButtonProps extends IconProps {
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

    let WrappedIcon = (props: IconProps): JSX.Element => (
      <Icon {...props} icon={this.props.icon || props.icon || faStroopwafel} />
    );
    let WrappedText = (
      props: TextProps & {children: React.ReactNode} & any,
    ): JSX.Element => <Text {...props}>{children || props.children}</Text>;

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    return (
      <div>
        <StyleContextConsumer>
          {props => {
            return (
              <button onClick={this.handleClick} style={props.Button()}>
                {component}
              </button>
            );
          }}
        </StyleContextConsumer>
      </div>
    );
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
