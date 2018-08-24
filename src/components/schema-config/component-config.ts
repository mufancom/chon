import {IconButtonSchema, PrimaryButtonSchema} from '../button/schema';
import {ComponentSchemaConfig} from '../common';

const config: ComponentSchemaConfig = {
  Button: {
    default: new PrimaryButtonSchema(),
    icon: new IconButtonSchema(),
  },
};

export default config;
