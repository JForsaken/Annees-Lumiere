/* Node modules */
import React, { Component, PropTypes } from 'react';
import { Button, Form } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import radium from 'radium';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

/* Components */
import FieldGroup from '../common/FieldGroup';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Utils */
import loginValidation, { fields } from './loginValidation';

/* Constants */
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from '../../actions/constants';

const style = {

  formContainer: {
    marginTop: 50,
  },

  formTitle: {
    textAlign: 'center',
  },

  formButtonContainer: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
  },

  form: {
    width: '75%',
    margin: '0 auto',
    marginTop: 75,
  },

  modal: {
    background: '#f4e9e9',
    borderTop: '11px solid #c12e2a',
    boxShadow: '#c12e2a 0px 0px 1px',
  },

};

@radium
@injectIntl
class Login extends Component {

  static propTypes = {
    location: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      isShowingModal: false,
    };
  }

  componentWillUpdate(nextProps) {
    const { samfish } = this.props;

    if (samfish.login.lastAction !== nextProps.samfish.login.lastAction) {
      this.handleSamfishResponse(nextProps.samfish.login.lastAction);
    }
  }

  handleModalClose() {
    this.setState({ isShowingModal: false });
  }

  handleSamfishResponse(response) {
    switch (response) {

      case LOGIN_FAILED:
        this.setState({ isShowingModal: true });
        break;

      case LOGIN_SUCCESS:
        this.redirectToDashboard();
        break;

      default:
        break;
    }
  }

  handleSubmit() {
    const loginAttempt = {
      username: this.props.fields.email.value,
      password: this.props.fields.password.value,
    };

    this.props.actions.loginPending();
    this.props.actions.login(loginAttempt);
  }

  redirectToDashboard() {
    const { history } = this.context;
    const { location } = this.props;
    let nextPath = '/account';

    if (location.state && location.state.nextPathname) {
      nextPath = location.state.nextPathname;
    }

    history.pushState({}, nextPath);
  }

  renderModal() {
    return (
      <ModalContainer onClose={this.handleModalClose}>
        <ModalDialog style={style.modal} onClose={this.handleModalClose}>
          <h2>
            <FormattedMessage id="login.form.modal.title" />
          </h2>
          <h4>
            <FormattedMessage id="login.form.modal.content" />
          </h4>
        </ModalDialog>
      </ModalContainer>
    );
  }

  render() {
    const {
      fields: {
        email,
        password,
      },
      handleSubmit,
      samfish,
      intl,
    } = this.props;

    return (
      <div style={style.formContainer}>
        {this.state.isShowingModal && this.renderModal()}
        <Form style={style.form} onSubmit={handleSubmit(this.handleSubmit)}>
          <h1 style={style.formTitle}>
            <FormattedMessage id="login.form.title" />
          </h1>
          <FieldGroup
            id="email"
            type="text"
            label={intl.messages['login.form.email']}
            placeholder={intl.messages['login.form.email']}
            {...email}
          />
          <FieldGroup
            id="password"
            type="password"
            label={intl.messages['login.form.password']}
            placeholder={intl.messages['login.form.password']}
            {...password}
          />
          <div style={style.formButtonContainer}>
            <Button
              bsStyle="primary"
              bsSize="large"
              type="submit"
              disabled={samfish.login.pending}
            >
              <i className="fa fa-paper-plane" /> {intl.messages['login.form.title']}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false,
  validate: loginValidation,
  fields,
})(connect(
  ({ samfish }) => ({ samfish }),
  dispatch => ({
    actions: bindActionCreators({
      ...samfishActions,
    }, dispatch),
  })
)(Login));
