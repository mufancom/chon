import React from 'react';

import allSchemas from '../schema-config';

// let compConfig = allSchemas;

export interface ChonComponentProps {
  compType?: string;
}

export type ComponentSchemaElem<T> = (
  props: T,
  children?: React.ReactNode[],
) => React.ReactElement<T>;

export interface ComponentSchemaElemDict {
  [name: string]: ComponentSchemaElem<ChonComponentProps>;
}

export abstract class ChonComponent<
  P extends ChonComponentProps = {},
  T extends ComponentSchemaElemDict = {},
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
  protected compSchema: ChonSchema<T>;

  constructor(props: P) {
    super(props);
    const {compType} = this.props;
    const schemas = allSchemas[this.constructor.name];

    if (schemas && compType && schemas[compType]) {
      this.compSchema = schemas[compType];
    } else if (schemas.default) {
      this.compSchema = schemas.default;
    } else {
      throw new Error(
        `cannot find ${compType} componentSchema in component which not has a default componentSchema}`,
      );
    }
  }
}

export interface ChonSchema<T extends ComponentSchemaElemDict> {
  compose(schemaElem: T): React.ReactChild;
}
