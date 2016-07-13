import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';
import * as actions from '../../actions/application';

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { history, store } = this.context;
    const { location } = this.props;

    let nextPath = '/account';
    if (location.state && location.state.nextPathname) {
      nextPath = location.state.nextPathname;
    }

    store.dispatch(actions.login(this.state, () => {
      // redirect to a secure page
      history.pushState({}, nextPath);
    }));
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Login</h1>
        </div>
        <div className="content">
          <form
            className="explore pure-form pure-form-aligned"
            onSubmit={::this.handleSubmit}
            onChange={::this.handleInputChange}
          >
            <fieldset>
              <div className="pure-control-group">
                <Input type="email" name="email" placeholder="Email" />
              </div>
              <div className="pure-control-group">
                <Input type="password" name="password" placeholder="Password" />
              </div>
              <Button
                type="submit"
                className="pure-button pure-button-primary"
              >
                Login
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
