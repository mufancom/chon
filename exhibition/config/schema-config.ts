import {SchemaConfig} from '../../src/components/common';
import {
  CustomButtonSchema,
  IconButtonSchema,
  RightIconSchema,
  TextButtonSchema,
} from '../layout/ButtonLayout';
import {
  NormalInputSchema,
  RightIconInputSchema,
  WithIconInputSchema,
} from '../layout/InoutLayout';

const config: SchemaConfig = {
  Button: {
    blue: new CustomButtonSchema(),
    text: new TextButtonSchema(),
    icon: new IconButtonSchema(),
    rightIcon: new RightIconSchema(),
  },
  Input: {
    normal: new NormalInputSchema(),
    withIcon: new WithIconInputSchema(),
    rightIcon: new RightIconInputSchema(),
  },
};

export default config;
