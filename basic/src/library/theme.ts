import {theme} from 'chon';

import {DefaultSchema} from './default';

export const {ThemeProvider, SwitchSchema} = theme({
  schemas: {
    default: DefaultSchema,
  },
});
