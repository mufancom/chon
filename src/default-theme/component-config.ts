import {
  IconButtonSchema,
  PrimaryButtonSchema,
} from '../components/button/schema';
import {
  NormalInputSchema,
  RightIconInputSchema,
  WithIconInputSchema,
} from '../components/input/schema';
import {ComponentSchemaConfig} from '../core';

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
};

export default config;
