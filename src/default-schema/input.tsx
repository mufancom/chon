import * as React from 'react';

import {InputComponentSchemaElemDict} from '../components/input';
import {ComponentSchema} from '../core';

export class WithIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(
    {Icon, EditText}: InputComponentSchemaElemDict,
    props: any,
  ): JSX.Element {
    return (
      <div {...props}>
        <Icon />
        <EditText />
      </div>
    );
  }
}

export class NormalInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose({EditText}: InputComponentSchemaElemDict, props: any): JSX.Element {
    return (
      <div {...props}>
        <EditText value="123" />
      </div>
    );
  }
}

export class RightIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(
    {Icon, EditText}: InputComponentSchemaElemDict,
    props: any,
  ): JSX.Element {
    return (
      <div {...props}>
        <EditText />
        <Icon />
      </div>
    );
  }
}
