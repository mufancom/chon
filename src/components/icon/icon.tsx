import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export interface ChonIconProps {}

export class ChonIcon extends React.Component<ChonIconProps> {
  render() {
    return (
      <FontAwesomeIcon
        {...Object.assign({icon: 'stroopwafel'}, this.props as any)}
      />
    );
  }
}
