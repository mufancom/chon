import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {ButtonUnion, ChonComposer, Icon} from 'chon';
import React from 'react';
import {style as styleClass} from 'typestyle';

declare global {
  namespace Chon {
    interface ButtonTypeToProps {
      default: {
        icon?: IconProp;
        name?: string;
      };
      progressive: {
        name?: number;
      };
    }
  }
}

export const buttonComposer = ChonComposer.create<ButtonUnion>(
  {
    default({Wrapper, Content}, {props: {icon}, style}) {
      let redClass = styleClass({
        backgroundColor: 'red',
      });

      return (
        <Wrapper className={redClass}>
          {icon ? <Icon icon={icon} /> : <></>}
          <Content />
        </Wrapper>
      );
    },
    progressive({Wrapper, Content}, {props: {}}) {
      return (
        <Wrapper>
          <Content />
        </Wrapper>
      );
    },
  },
  'default',
);
