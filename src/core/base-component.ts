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
  protected schema!: ComponentSchema<TSchemaElementDict>;

  componentWillReceiveProps(nextProps: Readonly<TProps>): void {
    this.initializeSchema(nextProps.compType!);
  }

  constructor(props: TProps) {
    super(props);
    this.initializeSchema(props.compType);
  }

  initializeSchema(compType?: string): void {
    const schemas = compConfig[this.constructor.name];

    if (!schemas) {
      throw new Error(`cannot find ${compType} componentSchema in component}`);
    }

    if (!schemas[compType!] && !schemas.default) {
      throw new Error(
        `${this.constructor.name} not has a default componentSchema`,
      );
    }

    if (compType && schemas[compType!]) {
      this.schema = schemas[compType!];
    } else if (schemas.default) {
      this.schema = schemas.default;
    }
  }
}

export interface ComponentSchema<
  TElementDict,
  T extends ChonComponentProps = ChonComponentProps
> {
  compose(elementDict: TElementDict, props?: T): ReactNode;
}

export interface ComponentSchemaConfig {
  [componentName: string]: {
    [typeName: string]: ComponentSchema<GeneralComponentSchemaElementDict>;
  };
}
