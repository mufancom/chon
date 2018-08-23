import * as React from 'react';

export interface ChonTextProps {}

export class ChonText extends React.Component<ChonTextProps> {
  render() {
    return <span>{this.props.children}</span>;
  }
}
