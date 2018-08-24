import * as React from 'react';

import {ChonComponentProps} from '../common';

export interface EditTextProps extends ChonComponentProps {
  value?: string;
  placeholder?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

export function EditText(
  props: EditTextProps,
): React.ReactElement<EditTextProps> {
  return <input style={{border: 0, outline: 0}} {...props} />;
}
