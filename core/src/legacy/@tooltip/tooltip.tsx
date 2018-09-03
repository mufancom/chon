import * as React from 'react';

import {Popper, PopperPlacement} from '../@popper';
import {RootRef} from '../@rootref';

interface State {
  showing: boolean;
}

interface Props {
  title: string;
  placement?: PopperPlacement;
}

const initialState = {
  showing: false,
};

export class Tooltip extends React.Component<Props, State> {
  state = initialState;
  targetEle: HTMLElement | undefined = undefined;

  render(): React.ReactNode {
    React.Children.only(this.props.children);
    const childrenProps = {
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };

    const child = (
      <RootRef rootRef={(ele): any => (this.targetEle = ele)}>
        {React.cloneElement(
          this.props.children as React.ReactElement<any>,
          childrenProps,
        )}
      </RootRef>
    );

    return [
      child,
      <Popper
        anchorEl={this.targetEle as HTMLElement}
        placement={this.props.placement}
        open={this.state.showing}
      >
        <span
          style={{
            padding: '3px 5px',
            background: '#333',
            color: '#FFF',
            borderRadius: '5px',
            fontSize: '0.8rem',
          }}
        >
          {this.props.title}
        </span>
      </Popper>,
    ];
  }

  private handleMouseEnter = (): void => {
    this.setState({showing: true});
  };

  private handleMouseLeave = (): void => {
    this.setState({showing: false});
  };
}
