import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {applyCompConfig} from '../src/components/common';
import {StyleProvider} from '../src/components/common/base-style';

import CompOne from './comp-one';
import CompTwo from './comp-two';
import config from './config/component-config';
import PageOne from "./page-one";

applyCompConfig(config);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>C H O N</h1>
        <StyleProvider styleType="green">
          <CompOne />
        </StyleProvider>
        <StyleProvider styleType="black">
          <CompTwo />
        </StyleProvider>
        <PageOne/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
