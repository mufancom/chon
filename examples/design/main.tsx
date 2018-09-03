import {Button, theme} from 'chon';
import {basicTheme} from 'chon-basic';
import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import ReactDOM from 'react-dom';

const {SwitchSchema, ThemeProvider} = theme(basicTheme);

@observer
export class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider>
        <Button>test</Button>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
