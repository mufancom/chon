import * as React from 'react';

import {ButtonComponentSchemaElemDict} from '../../src/components/button';
import {ComponentSchema} from '../../src/core';

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

export class TextButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
      </>
    );
  }
}

export class IconButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
      </>
    );
  }
}

export class RightIconSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
        <schemaElem.Icon />
      </>
    );
  }
}
