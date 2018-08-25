import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import {
  ChonComponent,
  ComponentSchemaElem,
  ComponentSchemaElemDict,
  StyleContextConsumer,
} from '../../core';
import {EditText, EditTextProps} from '../edittext';
import {Icon, IconProps} from '../icon';

export interface InputComponentSchemaElemDict extends ComponentSchemaElemDict {
  Icon: ComponentSchemaElem<IconProps>;
  EditText: ComponentSchemaElem<EditTextProps>;
}

export interface InputProps extends EditTextProps, IconProps {}

export class Input extends ChonComponent<
  InputProps,
  InputComponentSchemaElemDict
> {
  render(): React.ReactNode {
    let WrappedIcon = (props: IconProps): React.ReactElement<IconProps> => (
      <Icon {...props} icon={this.props.icon || props.icon || faStroopwafel} />
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

    const component = this.compSchema.compose({
      Icon: WrappedIcon,
      EditText: WrappedEditText,
    });
    return (
      <StyleContextConsumer>
        {values => {
          return <div style={values.Input()}>{component}</div>;
        }}
      </StyleContextConsumer>
    );
  }
}
