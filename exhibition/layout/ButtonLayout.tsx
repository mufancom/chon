import * as React from 'react';
import {ChonSchema} from '../../src/components/common/index';
import {ButtonComponentSchemaElemDict} from '../../src/components/button/button';

export class CustomButtonSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
        <schemaElem.Text>text in schema</schemaElem.Text>
      </>
    );
  }
}
