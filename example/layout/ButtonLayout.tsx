import * as React from 'react';

import {ButtonComponentSchemaElementDict} from '../../src/components/button';
import {ButtonProps} from '../../src/components/button/button';
import {ComponentSchema} from '../../src/core';

export class CustomButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(
    schemaElem: ButtonComponentSchemaElementDict,
    props: ButtonProps,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.Icon />
        <schemaElem.Text>text in schema</schemaElem.Text>
      </div>
    );
  }
}

export class TextButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(
    schemaElem: ButtonComponentSchemaElementDict,
    props: ButtonProps,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.Text />
      </div>
    );
  }
}

export class IconButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose(
    schemaElem: ButtonComponentSchemaElementDict,
    props: ButtonProps,
  ): React.ReactChild {
    return (
      <div {...props}>
        <schemaElem.Icon />
        <schemaElem.Text />
      </div>
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
