import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {ButtonUnion, ChonComposer, Icon} from 'chon';
import React from 'react';

import {ButtonSize} from '../style';

declare global {
  namespace Chon {
    interface ButtonTypeToProps {
      default: {
        icon?: IconProp;
        name?: string;
        size?: ButtonSize;
      };
      progressive: {
        name?: number;
      };
    }
  }
}

export const buttonComposer = ChonComposer.create<ButtonUnion>(
  {
    default({Wrapper, Content}, {props: {icon, children, size}, style}) {
      let hasChildren = !!children;

      return (
        <Wrapper
          className={style.getButtonStyle({size, hasPadding: hasChildren})}
        >
          {icon ? <Icon icon={icon} /> : <></>}
          {hasChildren ? (
            <span>
              <Content />
            </span>
          ) : (
            <></>
          )}
        </Wrapper>
      );
    },
    progressive({Wrapper, Content}, {props: {}}) {
      return (
        <Wrapper>
          <span>
            <Content />
          </span>
        </Wrapper>
      );
    },
  },
  'default',
);
