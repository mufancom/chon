import * as React from 'react';

export interface ChonTextProps {}

export class Text extends React.Component<ChonTextProps> {
  render(): JSX.Element {
    return <span>{this.props.children}</span>;
  }
}
