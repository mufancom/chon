import * as React from 'react';

export interface ChonTextProps {}

export class ChonText extends React.Component<ChonTextProps> {
  render(): JSX.Element {
    return <span>{this.props.children}</span>;
  }
}
