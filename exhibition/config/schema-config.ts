import {SchemaConfig} from '../../src/components/common';
import {CustomButtonSchema} from '../layout/ButtonLayout';

const config: SchemaConfig = {
  Button: {
    blue: new CustomButtonSchema(),
  },
};

export default config;
