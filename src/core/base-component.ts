import _ from 'lodash';
import React, {Component, ReactNode} from 'react';

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

export type ComponentSchemaElement<T> = (
  props: T,
  children?: React.ReactNode[],
) => React.ReactElement<T>;

export interface GeneralComponentSchemaElementDict {
  [name: string]: ComponentSchemaElement<ChonComponentProps>;
}

export abstract class ChonComponent<
  TProps extends ChonComponentProps,
  TSchemaElementDict extends GeneralComponentSchemaElementDict,
  TState = {},
  TSnapshot = unknown
> extends Component<TProps, TState, TSnapshot> {
  protected schema: ComponentSchema<TSchemaElementDict>;

  constructor(props: TProps) {
    super(props);
    const {compType} = this.props;
    const schemas = compConfig[this.constructor.name];

    if (schemas && compType && schemas[compType!]) {
      this.schema = schemas[compType!];
    } else if (schemas.default) {
      this.schema = schemas.default;
    } else {
      throw new Error(
        `cannot find ${compType} componentSchema in component which not has a default componentSchema}`,
      );
    }
  }
}

export interface ComponentSchema<TElementDict> {
  compose(elementDict: TElementDict): ReactNode;
}

export interface ComponentSchemaConfig {
  [componentName: string]: {
    [typeName: string]: ComponentSchema<GeneralComponentSchemaElementDict>;
  };
}
