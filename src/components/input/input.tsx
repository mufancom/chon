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
  protected schemaElementDict: InputComponentSchemaElemDict;

  constructor(props: InputProps) {
    super(props);
    this.schemaElementDict = {
      Icon: this.Icon,
      EditText: this.EditText,
    };
    this.compose();
  }

  render(): React.ReactNode {
    return (
      <div>
        <StyleContextConsumer>
          {({styleWrapper}) => {
            if (!this.mounted) {
              this.components = styleWrapper!(this.components, 'Input');
              this.mounted = true;
            }

            return (
              <div>
                <this.components />
              </div>
            );
          }}
        </StyleContextConsumer>
      </div>
    );
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
