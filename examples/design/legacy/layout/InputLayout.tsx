import * as React from 'react';

import {InputComponentSchemaElemDict} from '../../src/components/input';
import {ComponentSchema} from '../../src/core';

export class WithIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(
    schemaElem: InputComponentSchemaElemDict,
    props: any,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.Icon />
        <schemaElem.EditText />
      </div>
    );
  }
}

export class NormalInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(
    schemaElem: InputComponentSchemaElemDict,
    props: any,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.EditText />
      </div>
    );
  }
}

export class RightIconInputSchema
  implements ComponentSchema<InputComponentSchemaElemDict> {
  compose(
    schemaElem: InputComponentSchemaElemDict,
    props: any,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.EditText />
        <schemaElem.Icon />
      </div>
    );
  }
}
