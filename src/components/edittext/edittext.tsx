import * as React from 'react';

import {ChonComponentProps} from '../../core';

export interface EditTextProps extends ChonComponentProps {
  value?: string;
  placeholder?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

export class EditText extends React.Component<EditTextProps> {
  render(): React.ReactNode {
    return (
      <input
        style={{
          border: 0,
          outline: 0,
          flexGrow: 1,
        }}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
