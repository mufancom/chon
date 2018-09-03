import {AbstractChonSchema} from 'chon';

import {composerDict} from './composers';
import {DefaultStyle} from './style';

export class DefaultSchema extends AbstractChonSchema {
  constructor(style: DefaultStyle) {
    super(composerDict, style);
  }
}
