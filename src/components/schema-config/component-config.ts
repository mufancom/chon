import {IconButtonSchema, PrimaryButtonSchema} from '../button/schema';
import {ComponentSchemaConfig} from '../common';
import {
  NormalInputSchema,
  RightIconInputSchema,
  WithIconInputSchema,
} from '../input/schema';

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
