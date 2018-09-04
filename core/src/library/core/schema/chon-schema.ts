declare global {
  namespace Chon {
    interface ComposerDict {}

    type ComponentName = keyof ComposerDict;

    interface Style {}
  }
}

export interface ChonSchemaStatic {
  create(parent: AbstractChonSchema | undefined): AbstractChonSchema;
}

export abstract class AbstractChonSchema {
  constructor(
    readonly composers: Chon.ComposerDict,
    readonly style: Chon.Style,
  ) {}

  static create(): AbstractChonSchema {
    throw new Error('Not implemented');
  }
}
