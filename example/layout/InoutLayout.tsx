import * as React from 'react';

import {InputComponentSchemaElemDict} from '../../src/components/input';
import {ComponentSchema} from '../../src/core';

export class WithIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): React.ReactChild {
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
  compose(schemaElem: InputComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.EditText />
      </>
    );
  }
}

export class RightIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.EditText />
        <schemaElem.Icon />
      </>
    );
  }
}
