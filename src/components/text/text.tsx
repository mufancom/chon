import * as React from 'react';

export interface TextProps {}

export class Text extends React.Component<TextProps> {
  render(): JSX.Element {
    return <span>{this.props.children}</span>;
  }
}
