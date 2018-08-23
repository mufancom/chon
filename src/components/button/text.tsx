import * as React from 'react';

export interface TextProps {}

export default class Text extends React.Component<TextProps> {
  render() {
    return <span>{this.props.children}</span>;
  }
}
