import React = require('react');
import {ButtonComponentSchemaElemDict} from './button';
import {ChonSchema} from '../common/index';

export class PrimaryButtonSchema
  implements ChonSchema<ButtonComponentSchemaElemDict> {
  compose({Text}: ButtonComponentSchemaElemDict) {
    return (
      <>
        <Text />
      </>
    );
  }
}

export class IconButtonSchema {
  compose({Icon, Text}: ButtonComponentSchemaElemDict) {
    return (
      <>
        <Icon />
        <Text />
      </>
    );
  }
}
