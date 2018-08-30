import * as React from 'react';

import {Portal} from '../@portal';
import {RootRef} from '../@rootref';

interface State {
  place: string;
  showing: boolean;
  translate: string;
}

interface Props {
  title: string;
}

const initialState = {
  showing: false,
  place: 'top',
  translate: 'translate(0, 0)',
};

export class Tooltip extends React.Component<Props, State> {
  state = initialState;
  targetEle: HTMLElement | undefined = undefined;
  popEle: HTMLElement | undefined = undefined;

  showed: boolean = false;

  render(): React.ReactNode {
    React.Children.only(this.props.children);
    const style: React.CSSProperties = {
      position: 'absolute',
      padding: '3px 5px',
      background: '#333',
      top: 0,
      left: 0,
      color: '#FFF',
      fontSize: '0.8rem',
      borderRadius: '3px',
      transform: this.state.translate,
    };

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
      <RootRef rootRef={(ele): any => (this.popEle = ele)}>
        <Portal>
          {this.state.showing && <div style={style}>{this.props.title}</div>}
        </Portal>
      </RootRef>,
    ];
  }

  componentDidUpdate(): void {
    let left;
    let top;

    if (!this.showed && this.targetEle && this.popEle) {
      const tLeft = this.getOffsetLeft(this.targetEle);
      const tTop = this.getOffsetTop(this.targetEle);

      const tWidth = this.targetEle.offsetWidth;

      const pWidth = this.popEle.offsetWidth;
      const pHeight = this.popEle.offsetHeight;

      left = Math.floor(tWidth / 2 - pWidth / 2 + tLeft);
      top = Math.floor(tTop - pHeight - 5);

      const translate = `translate(${left}px, ${top}px)`;
      this.setState({translate});
      this.showed = true;
    }
  }

  private handleMouseEnter = (): void => {
    this.setState({showing: true});
  };

  private handleMouseLeave = (): void => {
    this.setState({showing: false});
    this.showed = false;
  };

  private getOffsetLeft(ele: HTMLElement): number {
    let result = ele.offsetLeft;
    let parent: HTMLElement = ele.offsetParent as HTMLElement;

    while (parent !== null) {
      result += parent.offsetLeft;
      parent = parent.offsetParent as HTMLElement;
    }

    return result;
  }

  private getOffsetTop(ele: HTMLElement): number {
    let result = ele.offsetTop;
    let parent: HTMLElement = ele.offsetParent as HTMLElement;

    while (parent !== null) {
      result += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement;
    }

    return result;
  }
}
