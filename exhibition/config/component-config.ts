import {ComponentSchemaConfig} from '../../src/components/common';
import {CustomButtonSchema} from '../layout/ButtonLayout';

const config: ComponentSchemaConfig = {
  Button: {
    custom: new CustomButtonSchema(),
  },
};

export default config;
