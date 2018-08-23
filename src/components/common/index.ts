import React = require('react');
import defaultSchemas from '../schema-config';
import {doubleDepthMerge} from '../utils/index';

let compConfig = defaultSchemas;

export function applyCompConfig(customSchemasConfig: SchemaConfig) {
  compConfig = doubleDepthMerge(defaultSchemas, customSchemasConfig);
}

export interface ChonComponentProps {
  compType?: string;
}

export type ComponentSchemaElem<T> = (
  props: T,
  children?: React.ReactNode[],
) => React.ReactElement<T>;

export interface ComponentSchemaElemDict {
  [name: string]: ComponentSchemaElem<React.Props<{}>>;
}

export abstract class ChonComponent<
  P extends ChonComponentProps,
  T extends ComponentSchemaElemDict,
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
  protected compSchema: ChonSchema<T>;

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

export interface ChonSchema<T extends ComponentSchemaElemDict> {
  compose(schemaElem: T): React.ReactChild;
}

export type SchemaConfig = {
  [componentName: string]: {
    [typeName: string]: ChonSchema<ComponentSchemaElemDict>;
  };
};
