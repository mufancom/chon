import _ from 'lodash';
import * as React from 'react';

import {
  ChonComponent,
  ComponentSchemaElement,
  GeneralComponentSchemaElementDict,
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
  protected schemaElementDict: InputComponentSchemaElemDict;

  constructor(props: InputProps) {
    super(props);
    this.schemaElementDict = {
      Icon: this.Icon,
      EditText: this.EditText,
    };
  }

  render(): React.ReactNode {
    return <this.components className={this.props.className} />;
  }

  private Icon = (props: ChonComponentIconProps): JSX.Element => (
    <Icon {...props} icon={this.props.icon || props.icon || ''} />
  );

  private EditText = (props: EditTextProps): JSX.Element => {
    return (
      <EditText
        {...this.props}
        onChange={this.props.onChange || props.onChange}
        value={this.props.value === undefined ? props.value : this.props.value}
      />
    );
  };
}
