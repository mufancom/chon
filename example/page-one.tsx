import * as React from 'react';

import {Button} from '../src/components/button';
import {Icon} from '../src/components/icon';
import {Input} from '../src/components/input';
import {Tooltip} from '../src/components/tooltip';
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
        <StyleProvider schema="green">
          <Button compType="blue">Green Style</Button>
          <Button icon="stroopwafel" compType="icon">
            Lalala
          </Button>
          <StyleProvider schema="reverse">
            <Button compType="text">Green Reverse Style</Button>
            <StyleProvider schema="blue">
              <Button compType="rightIcon">Blue</Button>
            </StyleProvider>
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
            // compType="withIcon"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </StyleProvider>
        <Input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Tooltip title="Hahahaha!">
          <span>Hellooooooooooooooooooooooooooooooooo</span>
        </Tooltip>
        {/* <Icon icon="stroopwafel" /> */}
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
