import * as React from 'react';

import {ComponentSchema} from '../../core';

import {InputComponentSchemaElemDict} from './input';

export class WithIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose({Icon, EditText}: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <Icon />
        <EditText />
      </>
    );
  }
}

export class NormalInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose({EditText}: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <EditText value="123" />
      </>
    );
  }
}

export class RightIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose({Icon, EditText}: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <EditText />
        <Icon />
      </>
    );
  }
}
