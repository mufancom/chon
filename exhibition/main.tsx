import {library} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
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

library.add(faStroopwafel);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>C H O N</h1>
        <StyleProvider config={styleConfig}>
          <CompOne />
          <PageOne />
        </StyleProvider>
        {/* <StyleProvider config={styleConfig}>
          <CompTwo />
        </StyleProvider> */}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
