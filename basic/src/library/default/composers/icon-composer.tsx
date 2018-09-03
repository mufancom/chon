import {ChonComposer, IconUnion} from 'chon';
import React from 'react';

declare global {
  namespace Chon {
    interface IconTypeToProps {
      default: {};
    }
  }
}

export const iconComposer = ChonComposer.create<IconUnion>(
  {
    default({Content}) {
      return (
        <>
          <Content />
        </>
      );
    },
  },
  'default',
);
