import * as React from 'react';

import {ChonSchema} from '../../src/components/common';
import {InputComponentSchemaElemDict} from '../../src/components/input';

export class WithIconInputSchema
  implements ChonSchema<InputComponentSchemaElemDict> {
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
  implements ChonSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.EditText />
      </>
    );
  }
}

export class RightIconInputSchema
  implements ChonSchema<InputComponentSchemaElemDict> {
  compose(schemaElem: InputComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.EditText />
        <schemaElem.Icon />
      </>
    );
  }
}
