import * as React from 'react';

import {Button} from '../src/components/button';
import {StyleProvider} from '../src/core/base-style';

export default class CompOne extends React.Component {
  render(): React.ReactChild {
    return (
      <div style={{display: 'flex'}}>
        <StyleProvider schema="light">
          <Button compType="custom">C</Button>
          <Button compType="custom">H</Button>
        </StyleProvider>
        <Button compType="custom">O</Button>
        <Button compType="custom">N</Button>
      </div>
    );
  }
}
