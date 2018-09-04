import {AbstractChonSchema} from 'chon';

import {composerDict} from './composers';
import {DefaultStyle} from './style';

export class DefaultSchema extends AbstractChonSchema {
  constructor(style: DefaultStyle) {
    super(composerDict, style);
  }

  static create(_parent?: AbstractChonSchema): DefaultSchema {
    let style = new DefaultStyle({
      foreground: 'black',
      background: 'white',
    });

    return new DefaultSchema(style);
  }
}
