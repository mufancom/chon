import {ComponentSchemaConfig} from '../core';
import {
  NormalInputSchema,
  RightIconInputSchema,
  SingleIconSchema,
  WithIconInputSchema,
} from '../default-schema';
import {IconButtonSchema, PrimaryButtonSchema} from '../default-schema/button';

const config: ComponentSchemaConfig = {
  Button: {
    default: new PrimaryButtonSchema(),
    icon: new IconButtonSchema(),
  },
  Input: {
    default: new NormalInputSchema(),
    withIcon: new WithIconInputSchema(),
    rightIcon: new RightIconInputSchema(),
  },
  Icon: {
    default: new SingleIconSchema(),
  },
};

export default config;
