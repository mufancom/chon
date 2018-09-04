import {faBolt, faPlane} from '@fortawesome/free-solid-svg-icons';
import {Button, Icon, StyleConsumer} from 'chon';
import {SwitchSchema, ThemeProvider} from 'chon-basic';
import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import ReactDOM from 'react-dom';

@observer
export class App extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider>
        <SwitchSchema name="dark">
          <StyleConsumer>
            {style => (
              <div style={{backgroundColor: style.getBackground()}}>
                <Button>test</Button>
              </div>
            )}
          </StyleConsumer>
        </SwitchSchema>

        <Icon icon={faBolt} />

        <Button>test</Button>
        <Button icon={faPlane}>test</Button>
        <Button icon={faPlane} />
        <Button icon={faPlane} size="compact">
          test
        </Button>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
