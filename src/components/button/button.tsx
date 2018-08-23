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

    let WrappedIcon = (props: ChonIconProps): JSX.Element => (
      <ChonIcon {...props} />
    );
    let WrappedText = (
      props: ChonTextProps & {children: React.ReactNode} & any,
    ): JSX.Element => (
      <ChonText {...props}>
        {children ? children : props.children ? props.children : undefined}
      </ChonText>
    );

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
