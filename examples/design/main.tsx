import {faPlane} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'chon';
import {ThemeProvider} from 'chon-basic';
import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import ReactDOM from 'react-dom';

@observer
export class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider>
        <Button>test</Button>
        <Button icon={faPlane}>test</Button>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
