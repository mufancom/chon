import {ComponentSchemaConfig} from '../../src/core';
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

const config: ComponentSchemaConfig = {
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
