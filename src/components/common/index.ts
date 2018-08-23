import React = require('react');
import allSchemas from '../schema-config';

export interface ChonComponentProps {
  compType?: string;
  schema?: {[p: string]: ChonSchema<any>};
}

export type ComponentSchemaElem<T> = (
  props: T,
  children?: React.ReactNode[],
) => React.ReactElement<T>;

export interface ComponentSchemaElemDict {
  [name: string]: ComponentSchemaElem<any>;
}

export abstract class ChonComponent<
  P extends ChonComponentProps = {},
  T extends ComponentSchemaElemDict = {},
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
  protected compSchema: ChonSchema<T>;

  constructor(props: any) {
    super(props);
    const {compType} = this.props;
    const schemas = allSchemas[this.constructor.name];

    if (schemas && compType && schemas) {
      this.compSchema = schemas[compType];
    } else if (schemas!.default) {
      this.compSchema = schemas!.default;
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
