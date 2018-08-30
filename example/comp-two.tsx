import * as React from 'react';

import {Button} from '../src/components/button';
import {Tooltip} from '../src/components/tooltip';
import {StyleProvider} from '../src/core/base-style';

export default class CompTwo extends React.Component {
  state = {
    type: 'ghost',
  };

  onClick = (): void => {
    const type = this.state.type === 'ghost' ? 'default' : 'ghost';
    this.setState({
      type,
    });
  };

  render(): React.ReactChild {
    return (
      <div style={{display: 'flex'}}>
        <StyleProvider schema="green">
          <Button compType="custom">C</Button>
          <Button compType="custom">H</Button>
        </StyleProvider>
        <Button compType="custom">O</Button>
        <Button compType="custom">N</Button>
        <span>Helloooooooo</span>
        <Tooltip title="Hello, this is a tip!">
          <span>!ooooops!</span>
        </Tooltip>
        <span>haha</span>
        <Button compType="custom">O</Button>
        <Button
          type={this.state.type as 'ghost' | 'default'}
          onClick={this.onClick}
        >
          N
        </Button>
        <Button>S</Button>
      </div>
    );
  }
}
