import * as React from 'react';

import {ButtonComponentSchemaElemDict} from '../../src/components/button/button';
import {ChonSchema} from '../../src/components/common/index';

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

export class TextButtonSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
      </>
    );
  }
}

export class IconButtonSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Icon />
      </>
    );
  }
}

export class RightIconSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
  compose(schemaElem: ButtonComponentSchemaElemDict): React.ReactChild {
    return (
      <>
        <schemaElem.Text />
        <schemaElem.Icon />
      </>
    );
  }
}
