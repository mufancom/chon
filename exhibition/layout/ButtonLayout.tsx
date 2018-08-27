import * as React from 'react';

import {ButtonComponentSchemaElementDict} from '../../src/components/button';
import {ComponentSchema} from '../../src/core';

export class CustomButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(schemaElem: ButtonComponentSchemaElementDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
        <schemaElem.Text>text in schema</schemaElem.Text>
      </>
    );
  }
}

export class TextButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(schemaElem: ButtonComponentSchemaElementDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
      </>
    );
  }
}

export class IconButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(schemaElem: ButtonComponentSchemaElementDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
        <schemaElem.Text />
      </>
    );
  }
}

export class RightIconSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(schemaElem: ButtonComponentSchemaElementDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
        <schemaElem.Icon />
      </>
    );
  }
}
