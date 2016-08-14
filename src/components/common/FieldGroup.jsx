import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const style = {

  formControl: {
    width: '100%',
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

  return (
    <FormGroup controlId={id} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl style={style.formControl} {...props}>
        {props.options && props.options}
      </FormControl>
      {help && <HelpBlock>{help}</HelpBlock>}
      {props.touched && props.error && <div style={style.errorMessage}>{props.error}</div>}
    </FormGroup>
  );
}
