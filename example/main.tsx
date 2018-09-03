import {library} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import styleConfig from './config/style-schema';
// import PageOne from './page-one';
import {Button} from '../src/components/button';
import {applyCompConfig} from '../src/core';
// import {StyleProvider} from '../src/core/base-style';

// import CompOne from './comp-one';
// import CompTwo from './comp-two';

import ChonThemeProvider from '../src/core/style-refactor';

import componentConfig from './config/component-config';
import config from './config/style-schema';

applyCompConfig(componentConfig);

library.add(faStroopwafel);

class App extends React.Component {
  render(): React.ReactNode {
    console.info(this.constructor.name, 'render');

    return (
      <>
        <h1>C H O N</h1>
        {/* <StyleProvider config={styleConfig}>
          <CompOne />
          <PageOne />
        </StyleProvider>
        <StyleProvider config={styleConfig}>
          <CompTwo />
        </StyleProvider> */}
        <hr />
        <ChonThemeProvider config={config}>
          <ChonThemeProvider schema="blue">
            <ChonThemeProvider schema="reverse">
              <Button>theme test</Button>
            </ChonThemeProvider>
          </ChonThemeProvider>
        </ChonThemeProvider>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
