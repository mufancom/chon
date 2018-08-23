import React from 'react';

import {ChonSchema} from '../common/index';

import {ButtonComponentSchemaElemDict} from './button';

export class PrimaryButtonSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
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
