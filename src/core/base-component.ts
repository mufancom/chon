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

  constructor(props: TProps) {
    super(props);
    this.initializeSchema(props.compType);
  }

  componentWillReceiveProps(nextProps: Readonly<TProps>): void {
    this.initializeSchema(nextProps.compType!);
  }

  initializeSchema(compType?: string): void {
    const schemas = compConfig[this.constructor.name];

    if (!schemas) {
      throw new Error(
        `cannot find any schema belongs to ${this.constructor.name}`,
      );
    }

    if (compType) {
      if (!schemas[compType]) {
        console.warn(
          `Cannot find '${compType}' componentSchema for '${
            this.constructor.name
          }' Component, try to use default schema`,
        );
      } else {
        this.schema = schemas[compType];
        return;
      }
    } else if (!schemas.default) {
      throw new Error(
        `component '${
          this.constructor.name
        }' didn't specify 'compType' or default schema `,
      );
    }

    if (compType && schemas[compType]) {
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
