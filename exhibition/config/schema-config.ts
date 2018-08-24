import {SchemaConfig} from '../../src/components/common';
import {
  CustomButtonSchema,
  IconButtonSchema,
  RightIconSchema,
  TextButtonSchema,
} from '../layout/ButtonLayout';

const config: SchemaConfig = {
  Button: {
    blue: new CustomButtonSchema(),
    text: new TextButtonSchema(),
    icon: new IconButtonSchema(),
    rightIcon: new RightIconSchema(),
  },
};

export default config;
