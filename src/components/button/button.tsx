import * as React from 'react';

import {
  ChonComponent,
  ChonComponentProps,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
} from '../../core';
import {StyleContextConsumer} from '../../core/base-style';
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
  onClick?(): void;
}

export default class Button extends ChonComponent<
  ButtonProps,
  ButtonComponentSchemaElementDict
> {
  render(): JSX.Element {
    let {children} = this.props;

    let WrappedIcon = (props: ChonComponentIconProps): JSX.Element => (
      <Icon {...props} icon={this.props.icon || props.icon || ''} />
    );

    let WrappedText = (
      props: TextProps & {children: React.ReactNode} & any,
    ): JSX.Element => <Text {...props}>{children || props.children}</Text>;

    const component = this.schema.compose({
      Icon: WrappedIcon,
      Text: WrappedText,
    });
    return (
      <div>
        <StyleContextConsumer>
          {({schema}) => {
            return (
              <button onClick={this.handleClick} style={schema.Button}>
                {component}
              </button>
            );
          }}
        </StyleContextConsumer>
      </div>
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

  // static Icon = (
  //   props: ChonIconProps,
  // ): React.ComponentElement<ChonIconProps, Icon> =>
  //   React.createElement(Icon, props);

  // static Text = (
  //   props: ChonTextProps,
  // ): React.ComponentElement<ChonTextProps, Text> =>
  //   React.createElement(Text, props);
}
