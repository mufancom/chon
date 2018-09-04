import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ChonComposer, IconUnion} from 'chon';
import React from 'react';

declare global {
  namespace Chon {
    interface IconTypeToProps {
      default: {
        icon: IconProp;
      };
    }
  }
}

export const iconComposer = ChonComposer.create<IconUnion>(
  {
    default({}, {props: {icon}}) {
      return <FontAwesomeIcon icon={icon} />;
    },
  },
  'default',
);
