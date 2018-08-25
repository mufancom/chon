import {ChonStyle, applyDefaultStyleSchema} from '../core';

const green = new ChonStyle({
  primaryColor: '#1D7F5F',
  accentColor: '#1D7F5F',
});
const black = new ChonStyle({
  primaryColor: '#000',
  accentColor: '#000',
});
const blue = new ChonStyle({
  primaryColor: '#039BE5',
  accentColor: '#039BE5',
});

const mapping: Map<string, ChonStyle> = new Map();
mapping.set('green', green);
mapping.set('blue', blue);
mapping.set('black', black);

green.setMapping(mapping);
blue.setMapping(mapping);
black.setMapping(mapping);

green.addMapping('reverse', blue);
blue.addMapping('reverse', green);

applyDefaultStyleSchema(green);
