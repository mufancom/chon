import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface ChonIconProps {}

export class ChonIcon extends React.Component<ChonIconProps> {
  render(): JSX.Element {
    return (
      <FontAwesomeIcon
        {...Object.assign({icon: 'stroopwafel'}, this.props as any)}
      />
    );
  }
}
