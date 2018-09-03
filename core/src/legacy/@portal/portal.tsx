import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface PortalProps {
  container?: Element;
}

export class Portal extends React.Component<PortalProps> {
  render(): React.ReactNode {
    return ReactDOM.createPortal(
      this.props.children,
      this.props.container || document.body,
    );
  }
}
