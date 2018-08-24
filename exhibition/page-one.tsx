import {faHome} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import {Button} from '../src/components/button';
import {Icon} from '../src/components/icon';

export default class PageOne extends React.Component {
  render(): React.ReactChild {
    return (
      <>
        <Button compType="blue">text in button</Button>
        <Button compType="icon">Lalala</Button>
        <Button compType="text">Hehehe</Button>
        <Button compType="rightIcon" icon={faHome}>
          Home
        </Button>
        <Icon icon={faHome} />
      </>
    );
  }
}
