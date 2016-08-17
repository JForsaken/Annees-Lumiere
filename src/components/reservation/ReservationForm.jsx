/* Node modules */
import React, { Component, PropTypes } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import radium from 'radium';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';

/* Components */
import FieldGroup from '../common/FieldGroup';
const RadiumButton = radium(Button);
const RadiumRow = radium(Row);

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Utils */
import reservationFormValidation, { fields } from './reservationFormValidation';

const style = {

  kidContainer: {
    display: 'block',
  },

  maxKidContainer: {
    backgroundImage: 'linear-gradient(#efcccc,#ecc)',
    color: '#700',
    fontWeight: 700,
    fontSize: 20,
    borderRadius: 5,
    textAlign: 'center',
    height: 50,
    display: 'block',
    marginBottom: 10,
  },

  maxKidText: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },

  headerColumn: {
    padding: 0,
  },

  trashButton: {
    display: 'block',
    fontSize: 15,
    width: '100%',
    marginBottom: 10,
  },

  lastButtonRow: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
  },

  addKidButtonRow: {
    marginBottom: 20,
    flexFlow: 'row',
    '@media (min-width: 300px)': {
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (min-width: 800px)': {
      display: 'block',
      justifyContent: 'left',
    },
  },

  lastButtonRowItem: {
    margin: 5,
  },

};

@radium
@injectIntl
class ReservationForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addKid = this.addKid.bind(this);
    this.removeKid = this.removeKid.bind(this);

    this.state = { kids: 1 };
    props.fields.kid1language.onChange('select');
  }

  getLanguageOptions() {
    const options = this.props.application.locales.map(locale => {
      const uppercasedLocale = locale.toUpperCase();
      return (
        <option
          key={uppercasedLocale}
          value={uppercasedLocale}
        >
          {uppercasedLocale}
        </option>
      );
    });

    options.unshift(
      <option key="select" value="select">...</option>
    );

    return options;
  }

  getSexOptions() {
    return [
      <option key="select" value="select">...</option>,
      <option key="M" value="M">M</option>,
      <option key="F" value="F">F</option>,
    ];
  }

  addKid() {
    this.props.fields[`kid${this.state.kids + 1}language`].onChange('select');
    this.setState({ kids: this.state.kids + 1 });
  }

  removeKid() {
    this.props.fields[`kid${this.state.kids}firstname`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}lastname`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}birthday`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}language`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}sex`].onChange(undefined);
    this.setState({ kids: this.state.kids - 1 });
  }

  handleSubmit() {
    // Do Samfish API Call (⌐■_■)
    alert('submitted');
  }

  renderKids() {
    const { kids } = this.state;
    const { intl } = this.props;
    const renderedKids = [];

    for (let i = 0; i < kids; i++) {
      renderedKids.push(
        <div key={`kid${i + 1}`} style={style.kidContainer}>
          <hr />
          <Row style={style.headerColumn}>
            <h3>
              <FormattedMessage id="form.kid" /> #{i + 1}
            </h3>
          </Row>
          <FieldGroup
            id={`kid${i + 1}firstname`}
            type="text"
            label={intl.messages['form.firstname']}
            placeholder={intl.messages['form.firstname']}
            {...this.props.fields[`kid${i + 1}firstname`]}
          />
          <FieldGroup
            id={`kid${i + 1}lastname`}
            type="text"
            label={intl.messages['form.lastname']}
            placeholder={intl.messages['form.lastname']}
            {...this.props.fields[`kid${i + 1}lastname`]}
          />
          <FieldGroup
            id={`kid${i + 1}birthday`}
            type="text"
            label={intl.messages['form.birthday']}
            placeholder={intl.messages['form.birthday']}
            {...this.props.fields[`kid${i + 1}birthday`]}
          />
          <FieldGroup
            id={`kid${i + 1}language`}
            componentClass="select"
            label={intl.messages['form.language']}
            placeholder={intl.messages['form.language']}
            options={this.getLanguageOptions()}
            {...this.props.fields[`kid${i + 1}language`]}
          />
          <FieldGroup
            id={`kid${i + 1}sex`}
            componentClass="select"
            label={intl.messages['form.sex']}
            placeholder={intl.messages['form.sex']}
            options={this.getSexOptions()}
            {...this.props.fields[`kid${i + 1}sex`]}
          />
        </div>
      );
    }

    return renderedKids;
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
      },
      resetForm,
      handleSubmit,
      submitting,
      intl,
    } = this.props;

    const { kids } = this.state;

    const maxKidContainer = (
      <div style={style.maxKidContainer}>
        <div style={style.maxKidText}>
          <i className="fa fa-exclamation-triangle" /> No more than 10 kids allowed!
        </div>
      </div>
    );

    const removeKidButton = (
      <RadiumButton
        bsStyle="danger"
        style={style.trashButton}
        disabled={kids <= 1}
        onClick={this.removeKid}
      >
        <i className="fa fa-trash" /> <FormattedMessage id="form.removeKid" />
      </RadiumButton>
    );

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)}>
        <h3>
          Parent
        </h3>
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

        {this.renderKids()}
        {removeKidButton}
        {this.state.kids >= 10 && maxKidContainer}

        <RadiumRow style={style.addKidButtonRow}>
          <Button onClick={this.addKid} disabled={this.state.kids >= 10}>
            <i className="fa fa-plus" /> <FormattedMessage id="form.addKid" />
          </Button>
        </RadiumRow>
        <Row style={style.lastButtonRow}>
          <Button
            style={style.lastButtonRowItem}
            bsStyle="primary"
            bsSize="large"
            type="submit"
            disabled={submitting}
          >
            {submitting ? <i /> : <i />}
            <i className="fa fa-paper-plane" /> <FormattedMessage id="form.submit" />
          </Button>
          <Button
            style={style.lastButtonRowItem}
            bsSize="large"
            type="button"
            disabled={submitting}
            onClick={resetForm}
          >
            <FormattedMessage id="form.clearValues" />
          </Button>
        </Row>
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
