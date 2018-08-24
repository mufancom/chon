import * as React from 'react';

import {ComponentSchema} from '../common';

import {InputComponentSchemaElemDict} from './input';

export class WithIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <schemaElem.Icon />
        <schemaElem.EditText />
      </>
    );
  }
}

export class NormalInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <schemaElem.EditText />
      </>
    );
  }
}

export class RightIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <schemaElem.EditText />
        <schemaElem.Icon />
      </>
    );
  }
}
