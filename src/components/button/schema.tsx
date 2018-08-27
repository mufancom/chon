import React from 'react';

import {ComponentSchema} from '../../core';

import {ButtonComponentSchemaElementDict} from './button';

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
