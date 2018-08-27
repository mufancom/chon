import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {applyCompConfig} from '../src/core';
import {StyleProvider} from '../src/core/base-style';

import CompOne from './comp-one';
// import CompTwo from './comp-two';
import componentConfig from './config/component-config';
import styleConfig from './config/style-schema';
import PageOne from './page-one';

applyCompConfig(componentConfig);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>C H O N</h1>
        <StyleProvider config={styleConfig}>
          <CompOne />
        </StyleProvider>
        {/* <StyleProvider config={styleConfig}>
          <CompTwo />
        </StyleProvider> */}
        <PageOne />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
