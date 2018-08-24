import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

import {ChonComponentProps} from '../common';

export interface IconProps extends ChonComponentProps {
  icon?: string | IconDefinition;
}

export class Icon extends React.Component<IconProps> {
  render(): React.ReactNode {
    return (
      <FontAwesomeIcon
        {...Object.assign({icon: faStroopwafel}, this.props as any)}
      />
    );
  }
}
