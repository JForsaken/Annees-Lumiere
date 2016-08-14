/* Node modules */
import React, { Component, PropTypes } from 'react';
import { Form, Button } from 'react-bootstrap';
import radium from 'radium';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

/* Components */
import FieldGroup from '../common/FieldGroup';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Utils */
import reservationFormValidation from './reservationFormValidation';

export const fields = [
  'firstname',
  'lastname',
  'address',
  'emailAddress',
  'primaryPhoneNumber',
  'optionalPhoneNumber',
  'profession',
  'language',
  'kids',
];

@radium
@injectIntl
class ReservationForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  getLanguageOptions() {
    let currentLocaleIndex = 0;
    const options = this.props.application.locales.map((locale, index) => {
      if (locale === this.props.application.locale) {
        currentLocaleIndex = index;
      }
      const uppercasedLocale = locale.toUpperCase();
      return (<option key={uppercasedLocale} value={uppercasedLocale}>{uppercasedLocale}</option>);
    });

    // put first locale on default option
    const currentLocale = options[currentLocaleIndex];
    options[currentLocaleIndex] = options[0];
    options[0] = currentLocale;

    return options;
  }

  handleSubmit() {
    // Do Samfish API Call (⌐■_■)
  }

  render() {
    const {
      fields: {
        firstname,
        lastname,
        address,
        emailAddress,
        primaryPhoneNumber,
        optionalPhoneNumber,
        profession,
        language,
        kids,
      },
      resetForm,
      handleSubmit,
      submitting,
      intl,
    } = this.props;

    kids.value = kids.value ? kids.value : 0;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <FieldGroup
          id="firstname"
          type="text"
          label={intl.messages['form.firstname']}
          placeholder={intl.messages['form.firstname']}
          {...firstname}
        />
        <FieldGroup
          id="lastname"
          type="text"
          label={intl.messages['form.lastname']}
          placeholder={intl.messages['form.lastname']}
          {...lastname}
        />
        <FieldGroup
          id="address"
          type="text"
          label={intl.messages['form.address']}
          placeholder={intl.messages['form.address']}
          {...address}
        />
        <FieldGroup
          id="emailAddress"
          type="text"
          label={intl.messages['form.emailAddress']}
          placeholder={intl.messages['form.emailAddress']}
          {...emailAddress}
        />
        <FieldGroup
          id="profession"
          type="text"
          label={intl.messages['form.profession']}
          placeholder={intl.messages['form.profession']}
          {...profession}
        />
        <FieldGroup
          id="primaryPhoneNumber"
          type="text"
          label={intl.messages['form.primaryPhoneNumber']}
          placeholder={intl.messages['form.primaryPhoneNumber']}
          {...primaryPhoneNumber}
        />
        <FieldGroup
          id="optionalPhoneNumber"
          type="text"
          label={intl.messages['form.optionalPhoneNumber']}
          placeholder={intl.messages['form.optionalPhoneNumber']}
          {...optionalPhoneNumber}
        />
        <FieldGroup
          id="language"
          componentClass="select"
          label={intl.messages['form.language']}
          placeholder={intl.messages['form.language']}
          options={this.getLanguageOptions()}
          {...language}
        />
        <FieldGroup
          id="kids"
          type="number"
          label={intl.messages['form.kids']}
          {...kids}
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? <i /> : <i />} Submit
        </Button>
        <Button type="button" disabled={submitting} onClick={resetForm}>
          Clear Values
        </Button>
      </Form>
    );
  }
}


export default reduxForm({
  form: 'reservationForm',
  destroyOnUnmount: false,
  validate: reservationFormValidation,
  fields,
})(connect(
  ({ application }) => ({ application })
)(ReservationForm));
