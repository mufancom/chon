import _ from 'lodash';
import * as React from 'react';

import {
  ChonComponent,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
} from '../../core';
import {StyleContextConsumer} from '../../core/base-style';
import {EditText, EditTextProps} from '../edittext';
import {ChonComponentIconProps, Icon} from '../icon';

export interface InputComponentSchemaElemDict
  extends GeneralComponentSchemaElementDict {
  Icon: ComponentSchemaElement<ChonComponentIconProps>;
  EditText: ComponentSchemaElement<EditTextProps>;
}

export interface InputProps extends EditTextProps, ChonComponentIconProps {}

export class Input extends ChonComponent<
  InputProps,
  InputComponentSchemaElemDict
> {
  // shouldComponentUpdate(nextProps: Readonly<InputProps>): boolean {
  //   const omitList = ['value'];

  //   if (_.isEqual(_.omit(this.props, omitList), _.omit(nextProps, omitList))) {
  //     return false;
  //   }

  //   return true;
  // }

  render(): React.ReactNode {
    let WrappedIcon = (
      props: ChonComponentIconProps,
    ): React.ReactElement<ChonComponentIconProps> => (
      <Icon {...props} icon={this.props.icon || props.icon || ''} />
    );
    let WrappedEditText = (
      props: EditTextProps,
    ): React.ReactElement<EditTextProps> => (
      <EditText
        {...props}
        onChange={this.props.onChange || props.onChange}
        value={this.props.value || props.value}
      />
    );

    const component = this.schema.compose({
      Icon: WrappedIcon,
      EditText: WrappedEditText,
    });
    return (
      <StyleContextConsumer>
        {({schema}) => {
          return (
            <div
              style={{
                ...schema.Input,
                ...{display: 'flex', flexDirection: 'row'},
              }}
            >
              {component}
            </div>
          );
        }}
      </StyleContextConsumer>
    );
  }
}
