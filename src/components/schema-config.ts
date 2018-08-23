import {IconButtonSchema, PrimaryButtonSchema} from './button/schema';
import {SchemaConfig} from './common/index';

const config: SchemaConfig = {
  Button: {
    default: new PrimaryButtonSchema(),
    icon: new IconButtonSchema(),
  },
};

export default config;
