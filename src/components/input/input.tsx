import _ from 'lodash';
import * as React from 'react';

import {
  ChonComponent,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
  SchemaElement,
  chonStyle,
} from '../../core';
import {EditText, EditTextProps} from '../edittext';
import {ChonComponentIconProps, Icon} from '../icon';

export interface InputComponentSchemaElemDict
  extends GeneralComponentSchemaElementDict {
  Icon: ComponentSchemaElement<ChonComponentIconProps>;
  EditText: ComponentSchemaElement<EditTextProps>;
}

export interface InputProps extends EditTextProps, ChonComponentIconProps {
  className?: string;
}

@chonStyle()
export class Input extends ChonComponent<
  InputProps,
  InputComponentSchemaElemDict
> {
  constructor(props: InputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <this.components className={this.props.className} />;
  }

  @SchemaElement
  Icon = (props: ChonComponentIconProps): JSX.Element => (
    <Icon {...props} icon={this.props.icon || props.icon || ''} />
  );

  @SchemaElement
  EditText = (props: EditTextProps): JSX.Element => {
    return (
      <EditText
        {...this.props}
        onChange={this.props.onChange || props.onChange}
        value={this.props.value === undefined ? props.value : this.props.value}
      />
    );
  };
}
