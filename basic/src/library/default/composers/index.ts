import {buttonComposer} from './button-composer';
import {iconComposer} from './icon-composer';

export const composerDict: Chon.ComposerDict = {
  Button: buttonComposer,
  Icon: iconComposer,
};

export * from './button-composer';
export * from './icon-composer';
