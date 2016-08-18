import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const style = {

  formControl: {
    width: '100%',
  },

  dateFormControl: {
    display: 'inline-block',
    marginRight: 10,
    width: 86,
  },

  dateFormGroup: {
    display: 'inline-block',
  },

  errorMessage: {
    color: '#a94442',
  },

};

function getValidationState(props) {
  if (props.error && props.touched) {
    return 'error';
  }
  return null;
}

export default function FieldGroup({ id, label, help, ...props }) {
  const validationState = getValidationState(props);
  const formControlStyle = props.isDateField ? style.dateFormControl : style.formControl;
  const formGroupStyle = props.isDateField ? style.dateFormGroup : null;

  return (
    <FormGroup style={formGroupStyle} controlId={id} validationState={validationState}>
      {!props.isDateField && <ControlLabel>{label}</ControlLabel>}
      <FormControl style={formControlStyle} {...props}>
        {props.options && props.options}
      </FormControl>
    {help && <HelpBlock>{help}</HelpBlock>}
    {props.touched && props.error &&
      <div style={style.errorMessage}>
        <FormattedMessage id={`form.errors.${props.error}`} />
      </div>
    }
    </FormGroup>
  );
}
