import React from 'react';

import {ButtonComponentSchemaElementDict} from '../components/button';
import {ComponentSchema} from '../core';

export class PrimaryButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElementDict> {
  compose({Text}: ButtonComponentSchemaElementDict): JSX.Element {
    return (
      <>
        <Text />
      </>
    );
  }
}

export class IconButtonSchema {
  compose({Icon, Text}: ButtonComponentSchemaElementDict): JSX.Element {
    return (
      <>
        <Icon />
        <Text />
      </>
    );
  }
}
