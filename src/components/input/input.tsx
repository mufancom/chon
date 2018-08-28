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

  private mounted: boolean = false;
  component: any;

  constructor(props: InputProps) {
    super(props);
  }

  render(): React.ReactNode {
    let WrappedIcon = (props: ChonComponentIconProps): JSX.Element => (
      <Icon {...props} icon={this.props.icon || props.icon || ''} />
    );

    let WrappedEditText = (props: EditTextProps): JSX.Element => {
      return (
        <EditText
          {...this.props}
          onChange={this.props.onChange || props.onChange}
          value={
            this.props.value === undefined ? props.value : this.props.value
          }
        />
      );
    };

    if (!this.mounted) {
      this.component = () =>
        this.schema.compose({
          Icon: WrappedIcon,
          EditText: WrappedEditText,
        });
      this.mounted = true;
    }

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
              <this.component />
            </div>
          );
        }}
      </StyleContextConsumer>
    );
  }
}
