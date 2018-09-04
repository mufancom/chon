import {theme} from 'chon';

import {DarkSchema} from './dark';
import {DefaultSchema} from './default';

export const {ThemeProvider, SwitchSchema} = theme({
  schemas: {
    default: DefaultSchema,
    dark: DarkSchema,
  },
});
