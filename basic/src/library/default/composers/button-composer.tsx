import {ButtonUnion, ChonComposer} from 'chon';
import React from 'react';

declare global {
  namespace Chon {
    interface ButtonTypeToProps {
      default: {
        name: string;
      };
      progressive: {
        papa: string;
      };
    }
  }
}

export const buttonComposer = ChonComposer.create<ButtonUnion>(
  {
    default({Content}, {props: {}}) {
      return <Content />;
    },
    progressive({Content}, {props: {}}) {
      return <Content />;
    },
  },
  'default',
);
