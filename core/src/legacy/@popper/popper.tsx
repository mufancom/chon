import PopperJS from 'popper.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Portal} from '../@portal';

export type PopperPlacement =
  | 'auto'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

interface PopperProps {
  anchorEl: HTMLElement;
  open: boolean;
  placement?: PopperPlacement;
  container?: HTMLElement;
  keepMounted?: boolean;
}

export class Popper extends React.Component<PopperProps> {
  private popper: PopperJS | undefined = undefined;

  render(): React.ReactNode {
    if (!this.props.open) {
      return '';
    }

    return (
      <Portal container={this.props.container}>
        <div style={{position: 'absolute'}}>{this.props.children}</div>
      </Portal>
    );
  }

  componentDidUpdate(preProps: PopperProps): void {
    if (preProps.open || !this.props.open) {
      this.handleClose();
      return;
    }

    this.handleOpen();
  }

  private handleOpen = (): void => {
    const {anchorEl, open, placement} = this.props;

    const popperNode = ReactDOM.findDOMNode(this);

    if (!anchorEl || !popperNode || !open) {
      return;
    }

    if (this.popper) {
      this.popper.destroy();
      this.popper = undefined;
    }

    this.popper = new PopperJS(anchorEl, popperNode as Element, {
      placement: placement || 'top',
    });
  };

  private handleClose = (): void => {
    if (this.popper) {
      this.popper.destroy();
      this.popper = undefined;
    }
  };
}
