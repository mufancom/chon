import * as React from 'react';

import {Button} from '../src/components/button';

export default class PageOne extends React.Component {
  render(): React.ReactChild {
    return (
      <>
        <Button compType="blue">text in button</Button>
      </>
    );
  }
}
