import {IconProp as FAIconProps} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import {IconComponentSchemaElementDict, IconProps} from '../components/icon';
import {ComponentSchema} from '../core';

export class SingleIconSchema
  implements ComponentSchema<IconComponentSchemaElementDict> {
  compose(
    {Content}: IconComponentSchemaElementDict,
    props: IconProps,
  ): JSX.Element {
    return (
      <>
        <Content>
          {props.icon ? (
            <FontAwesomeIcon icon={props.icon as FAIconProps} />
          ) : (
            ''
          )}
        </Content>
      </>
    );
  }
}
