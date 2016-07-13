import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import * as applicationActions from '../actions/application';
import MenuListItem from './MenuListItem';

const menuItems = [
  { text: <FormattedMessage id="menu.reservation" />, link: '/reservation', icon: 'fa fa-user' },
  { text: <FormattedMessage id="menu.account" />, link: '/account', icon: 'fa fa-user' },
  { text: <FormattedMessage id="menu.about" />, link: '/about', icon: 'fa fa-dot-circle-o' },
];

class Menu extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleSwitchLocale = this.handleSwitchLocale.bind(this);
  }

  handleSwitchLocale(lang) {
    this.props.actions.switchLocale(lang);
  }

  render() {
    const { application: { locales } } = this.props;

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FormattedMessage id="website.title" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              menuItems.map((item, i) =>
                <MenuListItem {...item} key={i} />)
            }
          </Nav>
          <Nav pullRight>
            <NavDropdown
              id="language-switcher"
              eventKey={menuItems.length}
              title={<FormattedMessage id="language.switcher" />}
            >
              {
                locales.map((lang, i) =>
                  <MenuItem
                    eventKey={lang}
                    key={i}
                    onSelect={this.handleSwitchLocale}
                  >
                    {lang.toUpperCase()}
                  </MenuItem>)
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(
  ({ application }) => ({ application }),
  dispatch => ({
    actions: bindActionCreators({
      ...applicationActions,
    }, dispatch),
  })
)(Menu);
