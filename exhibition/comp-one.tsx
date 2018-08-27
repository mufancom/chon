import * as React from 'react';

import {Button} from '../src/components/button';
import {StyleProvider} from '../src/core/base-style';

import {config} from './config/style-schema';

export default class CompOne extends React.Component {
  render(): React.ReactChild {
    return (
      <div style={{display: 'flex'}}>
        <StyleProvider config={config}>
          <Button compType="custom">C</Button>
          <Button compType="custom">H</Button>
        </StyleProvider>
        <Button compType="custom">O</Button>
        <Button compType="custom">N</Button>
      </div>
    );
  }
}
