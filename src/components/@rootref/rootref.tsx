import * as React from 'react';
import * as ReactDOM from 'react-dom';

type RefFunc = (value: HTMLElement | undefined) => void;

interface RootRefProps {
  rootRef: RefFunc;
}

export class RootRef extends React.Component<RootRefProps> {
  componentDidMount(): void {
    const dom = ReactDOM.findDOMNode(this);
    this.props.rootRef(dom as HTMLElement);
  }

  componentDidUpdate(preProps: RootRefProps): void {
    if (preProps.rootRef !== this.props.rootRef) {
      preProps.rootRef(undefined);
      this.props.rootRef(ReactDOM.findDOMNode(this) as HTMLElement);
    }
  }

  componentWillUnmount(): void {
    this.props.rootRef(undefined);
  }

  render(): React.ReactNode {
    return this.props.children;
  }
}
