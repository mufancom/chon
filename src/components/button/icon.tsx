import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface IconProps {

}

export default class Icon extends React.Component<IconProps> {
  render() {
    return <FontAwesomeIcon {...Object.assign({ icon: "stroopwafel" }, this.props as any)} />;
  }
};
