import {AbstractChonSchema} from 'chon';

import {composerDict} from '../default';

import {DarkStyle} from './style';

export class DarkSchema extends AbstractChonSchema {
  constructor(style: DarkStyle) {
    super(composerDict, style);
  }

  static create(_parent?: AbstractChonSchema): DarkSchema {
    let style = new DarkStyle({
      foreground: '#fff',
      background: '#2d4a81',
    });

    return new DarkSchema(style);
  }
}
