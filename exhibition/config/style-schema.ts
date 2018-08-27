import {ChonStyleSchema} from '../../src/core';

const green = new ChonStyleSchema({
  primaryColor: '#1D7F5F',
  accentColor: '#1D7F5F',
  borderRadius: '4px',
});
const black = new ChonStyleSchema({
  primaryColor: '#000',
  accentColor: '#000',
  borderRadius: '50% 30% / 20% 40%',
});
const blue = new ChonStyleSchema({
  primaryColor: '#039BE5',
  accentColor: '#039BE5',
});

export class ThemeColorStyleSchema extends ChonStyleSchema {}

const mapping: Map<string, ChonStyleSchema> = new Map();
mapping.set('green', green);
mapping.set('blue', blue);
mapping.set('black', black);

green.setMapping(new Map(mapping));
blue.setMapping(new Map(mapping));
black.setMapping(new Map(mapping));

green.addMapping('reverse', blue);
blue.addMapping('reverse', green);

export const config = {
  default: defaultSchema,

  schemas: {
    default: defaultSchema,
    light: lightSchema,
    dark: darkSchema,
  },

  mapping: {
    light: {
      reverse: 'dark',
    },
    dark: {
      reverse: 'light',
    },
  },

  // mapping: {
  //   default: {
  //     green: greenSchema,
  //     black: blackSchema,
  //     blue: blueSchema,
  //   },
  //   green: {
  //     reverse: blueSchema,
  //   },
  //   black: {
  //     blue: greenSchema,
  //   },
  //   blue: {
  //     reverse: blackSchema,
  //   },
  // },
};

export default green;
