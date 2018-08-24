import {faHome} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import {Button} from '../src/components/button';
import {Icon} from '../src/components/icon';
import {Input} from '../src/components/input';

interface PageOneState {
  inputValue: string;
}

export default class PageOne extends React.Component<{}, PageOneState> {
  state = {
    inputValue: 'hello',
  };

  render(): React.ReactChild {
    return (
      <>
        <Button compType="blue">text in button</Button>
        <Button compType="icon">Lalala</Button>
        <Button compType="text">Hehehe</Button>
        <Button compType="rightIcon" icon={faHome}>
          Home
        </Button>
        <Icon icon={faHome} />
        <br />
        {this.state.inputValue}
        <Input
          compType="normal"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Input
          compType="withIcon"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Input
          compType="rightIcon"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </>
    );
  }

  private handleInputChange = (
    event: React.FormEvent<HTMLInputElement>,
  ): void => {
    this.setState({
      inputValue: event.currentTarget.value,
    });
  };
}
