import * as React from 'react';

import {Button} from '../src/components/button';
import {Icon} from '../src/components/icon';
import {Input} from '../src/components/input';
import {StyleProvider} from '../src/core';

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
        <Button icon="stroopwafel" compType="icon">
          Lalala
        </Button>
        <StyleProvider schema="lightGreen">
          <Button compType="text">Hehehe</Button>
          <StyleProvider schema="blue">
            <Button compType="rightIcon">light reverse schema</Button>
          </StyleProvider>
        </StyleProvider>
        <Icon icon="test" />
        <br />
        {this.state.inputValue}
        <StyleProvider schema="blue">
          <Input
            compType="normal"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </StyleProvider>
        <StyleProvider schema="black">
          <Input
            compType="withIcon"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </StyleProvider>
        <Input
          compType="rightIcon"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Icon icon="stroopwafel" />
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
