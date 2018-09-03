import {AbstractChonStyle} from './chon-style';

declare global {
  namespace Chon {
    interface ComposerDict {}

    type ComponentName = keyof ComposerDict;
  }
}

export interface ChonSchemaStatic {
  create(parent: AbstractChonSchema | undefined): AbstractChonSchema;
}

export abstract class AbstractChonSchema {
  constructor(
    readonly composers: Chon.ComposerDict,
    readonly style: AbstractChonStyle,
  ) {}

  static create(): AbstractChonSchema {
    throw new Error('Not implemented');
  }
}
