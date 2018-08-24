import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {applyCompConfig} from '../src/components/common/index';

import config from './config/schema-config';
import PageOne from './page-one';

applyCompConfig(config);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <PageOne />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export * from './page-one';
