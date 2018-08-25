import _ from 'lodash';
import React from 'react';

import defaultSchemas from '../default-theme/component-config';

let compConfig = defaultSchemas;

export function applyCompConfig(
  customSchemasConfig: ComponentSchemaConfig,
): void {
  compConfig = _.merge(defaultSchemas, customSchemasConfig);
}

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
  P extends ChonComponentProps,
  T extends ComponentSchemaElemDict,
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
  protected compSchema: ComponentSchema<T>;

  constructor(props: P) {
    super(props);
    const {compType} = this.props;
    const schemas = compConfig[this.constructor.name];

    if (schemas && compType && schemas[compType!]) {
      this.compSchema = schemas[compType!];
    } else if (schemas.default) {
      this.compSchema = schemas.default;
    } else {
      throw new Error(
        `cannot find ${compType} componentSchema in component which not has a default componentSchema}`,
      );
    }
  }
}

export interface ComponentSchema<T extends ComponentSchemaElemDict> {
  compose(schemaElem: T): React.ReactChild;
}

export interface ComponentSchemaConfig {
  [componentName: string]: {
    [typeName: string]: ComponentSchema<ComponentSchemaElemDict>;
  };
}
