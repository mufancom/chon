import * as React from 'react';

import {ButtonComponentSchemaElemDict} from '../../src/components/button';
import {ComponentSchema} from '../../src/components/common';

export class CustomButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
        <schemaElem.Text>text in schema</schemaElem.Text>
      </>
    );
  }
}
