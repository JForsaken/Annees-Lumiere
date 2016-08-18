/* Node modules */
import React, { Component, PropTypes } from 'react';
import { ControlLabel, Form, Button, Row } from 'react-bootstrap';
import radium from 'radium';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

/* Components */
import FieldGroup from '../common/FieldGroup';
const RadiumButton = radium(Button);
const RadiumRow = radium(Row);
const RadiumForm = radium(Form);

/* Utils */
import reservationFormValidation, { fields } from './reservationFormValidation';
import { extractReservationBody } from './helpers';

/* Constants */
import {
  POST_RESERVATION_SUCCESS,
  POST_RESERVATION_FAILED,
} from '../../constants';


const style = {

  formContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    '@media (min-width: 300px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '@media (min-width: 800px)': {
      paddingLeft: '15%',
      paddingRight: '15%',
    },
  },

  formBackground: {
    borderRadius: 10,
    background: '#f0f0f0',
    padding: 20,
  },

  modal: {
    errors: {
      background: '#f4e9e9',
      borderTop: '11px solid #c12e2a',
      boxShadow: '#c12e2a 0px 0px 1px',
    },

    success: {
      background: '#f0f5ea',
      borderTop: '11px solid green',
      boxShadow: 'green 0px 0px 1px',
    },
  },

  divider: {
    borderTop: '1px solid #545454',
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
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addKid = this.addKid.bind(this);
    this.removeKid = this.removeKid.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      kids: 1,
      isShowingModal: false,
    };
  }

  componentDidMount() {
    this.props.fields.kid1language.onChange('select');
  }

  shouldComponentUpdate(nextProps) {
    const currentReservation = this.props.samfish.reservation;
    const reservation = nextProps.samfish.reservation;

    if (reservation.lastAction !== currentReservation.lastAction) {
      this.handleSamfishResponse(reservation);
    }
    return true;
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

  getBirthDayOptions() {
    const days = [];
    const { intl } = this.props;

    days.push(
      <option key="select" value="select">{intl.messages['form.birthDay']}</option>
    );

    for (let i = 1; i <= 31; i++) {
      days.push(
        <option
          key={`day${i}`}
          value={i.toString().length === 1 ? `0${i}` : i.toString()}
        >
          {i}
        </option>
      );
    }

    return days;
  }

  getBirthMonthOptions() {
    const months = [];
    const { intl } = this.props;

    months.push(
      <option key="select" value="select">{intl.messages['form.birthMonth']}</option>
    );

    for (let i = 1; i <= 12; i++) {
      const currentMonth = intl.messages[`form.months.${i}`];
      months.push(
        <option
          key={`month${i}`}
          value={i.toString().length === 1 ? `0${i}` : i.toString()}
        >
          {currentMonth}
        </option>
      );
    }

    return months;
  }

  getBirthYearOptions() {
    const years = [];
    const { intl } = this.props;
    const currentYear = new Date().getFullYear();

    years.push(
      <option key="select" value="select">{intl.messages['form.birthYear']}</option>
    );

    for (let i = currentYear; i >= currentYear - 50; i--) {
      years.push(
        <option key={`year${i}`} value={i.toString()}>{i}</option>
      );
    }

    return years;
  }

  handleSamfishResponse(reservation) {
    switch (reservation.lastAction) {

      case POST_RESERVATION_FAILED:
        this.setState({ isShowingModal: true });
        break;

      case POST_RESERVATION_SUCCESS:
        this.setState({ isShowingModal: true });
        break;

      default:
        break;
    }
  }

  handleModalClose() {
    this.setState({ isShowingModal: false });
  }

  addKid() {
    this.props.fields[`kid${this.state.kids + 1}language`].onChange('select');
    this.setState({ kids: this.state.kids + 1 });
  }

  removeKid() {
    this.props.fields[`kid${this.state.kids}firstname`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}lastname`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}birthDay`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}birthMonth`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}birthYear`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}language`].onChange(undefined);
    this.props.fields[`kid${this.state.kids}sex`].onChange(undefined);
    this.setState({ kids: this.state.kids - 1 });
  }

  handleSubmit() {
    const body = extractReservationBody(this.props.fields);
    this.props.actions.postReservationPending();
    this.props.actions.postReservation(body);
  }

  renderModal() {
    const samfishErrors = this.props.samfish.reservation.errors;
    const messageType = samfishErrors ? 'errors' : 'success';
    const modalStyle = samfishErrors ? style.modal.errors : style.modal.success;

    return (
      <ModalContainer style={style.modal.container} onClose={this.handleModalClose}>
        <ModalDialog style={modalStyle} onClose={this.handleModalClose}>
          <h2>
            <FormattedMessage id={`form.modal.title.${messageType}`} />
          </h2>
          <h4>
            <FormattedMessage id={`form.modal.content.${messageType}`} />
          </h4>
        </ModalDialog>
      </ModalContainer>
    );
  }

  renderKids() {
    const { kids } = this.state;
    const { intl } = this.props;
    const renderedKids = [];

    for (let i = 0; i < kids; i++) {
      renderedKids.push(
        <div key={`kid${i + 1}`}>
          <hr style={style.divider} />
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
          <ControlLabel>{intl.messages['form.birthday']}</ControlLabel>
          <br />
          <FieldGroup
            id={`kid${i + 1}birthDay`}
            isDateField
            componentClass="select"
            label={intl.messages['form.birthDay']}
            placeholder={intl.messages['form.birthDay']}
            options={this.getBirthDayOptions()}
            {...this.props.fields[`kid${i + 1}birthDay`]}
          />
          <FieldGroup
            id={`kid${i + 1}birthMonth`}
            isDateField
            componentClass="select"
            label={intl.messages['form.birthMonth']}
            placeholder={intl.messages['form.birthMonth']}
            options={this.getBirthMonthOptions()}
            {...this.props.fields[`kid${i + 1}birthMonth`]}
          />
          <FieldGroup
            id={`kid${i + 1}birthYear`}
            isDateField
            componentClass="select"
            label={intl.messages['form.birthYear']}
            placeholder={intl.messages['form.birthYear']}
            options={this.getBirthYearOptions()}
            {...this.props.fields[`kid${i + 1}birthYear`]}
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
      samfish,
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
      <RadiumRow style={style.formContainer}>
      {this.state.isShowingModal && this.renderModal()}
        <RadiumForm style={style.formBackground} onSubmit={handleSubmit(this.handleSubmit)}>
          <h3>
            <FormattedMessage id="form.parent" />
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
              disabled={samfish.reservation.pending}
            >
              <i className="fa fa-paper-plane" /> <FormattedMessage id="form.submit" />
            </Button>
            <Button
              style={style.lastButtonRowItem}
              bsSize="large"
              type="button"
              disabled={samfish.reservation.pending}
              onClick={resetForm}
            >
              <FormattedMessage id="form.clearValues" />
            </Button>
          </Row>
        </RadiumForm>
      </RadiumRow>
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
