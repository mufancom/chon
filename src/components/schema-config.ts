import {PrimaryButtonSchema, IconButtonSchema} from './button/schema';

const config: {[name: string]: any} = {
  Button: {
    default: new PrimaryButtonSchema(),
    icon: new IconButtonSchema(),
  },
};

export default config;
