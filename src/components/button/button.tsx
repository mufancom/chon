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
  protected schemaElementDict: ButtonComponentSchemaElementDict;

  constructor(props: ButtonProps) {
    super(props);
    this.schemaElementDict = {
      Icon: this.Icon,
      Text: this.Text,
    };
    this.compose();
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
      <div>
        <StyleContextConsumer>
          {({styleWrapper}) => {
            if (!this.mounted) {
              const TempComponents = this.components;
              const wrappedComponents: React.ComponentType = (props: any) => {
                return (
                  <button onClick={this.handleClick} {...props}>
                    <TempComponents />
                  </button>
                );
              };
              this.components = styleWrapper!(wrappedComponents, 'Button');
              this.mounted = true;
            }

            return <this.components />;
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
