import React from 'react';

import {ComponentSchema} from '../common';

import {ButtonComponentSchemaElemDict} from './button';

export class PrimaryButtonSchema
  implements ComponentSchema<ButtonComponentSchemaElemDict> {
  compose({Text}: ButtonComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <Text />
      </>
    );
  }
}

export class IconButtonSchema {
  compose({Icon, Text}: ButtonComponentSchemaElemDict): JSX.Element {
    return (
      <>
        <Icon />
        <Text />
      </>
    );
  }
}
