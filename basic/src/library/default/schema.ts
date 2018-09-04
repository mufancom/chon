import {AbstractChonSchema} from 'chon';

import {composerDict} from './composers';
import {DefaultStyle} from './style';

export class DefaultSchema extends AbstractChonSchema {
  constructor(style: DefaultStyle) {
    super(composerDict, style);
  }

  static create(_parent?: AbstractChonSchema): DefaultSchema {
    let style = new DefaultStyle({
      foreground: '#117cf3',
      background: '#fff',
    });

    return new DefaultSchema(style);
  }
}
