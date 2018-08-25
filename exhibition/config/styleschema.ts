import {ChonStyle} from '../../src/core';

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

green.setMapping(new Map(mapping));
blue.setMapping(new Map(mapping));
black.setMapping(new Map(mapping));

green.addMapping('reverse', blue);
blue.addMapping('reverse', green);

export default green;
