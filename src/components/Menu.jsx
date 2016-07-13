import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
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
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
    switchLocale: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleSwitchLocale = this.handleSwitchLocale.bind(this);
  }

  handleSwitchLocale() {
    const { locale, locales } = this.props.application;
    const nextLocale = locales.indexOf(locale) + 1 === locales.length ?
                       locales[0] : locales[locales.indexOf(locale) + 1];

    this.props.switchLocale(nextLocale);
  }

  render() {
    const { application: { locale } } = this.props;

    return (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <Link to="/" className="pure-menu-heading">
            <FormattedMessage id="website.title" />
          </Link>
          <ul className="pure-menu-list">
            {
              menuItems.map((item, i) =>
                <MenuListItem {...item} className="pure-menu-link" key={i} />)
            }
            <li className="pure-menu-item">
              <a onClick={this.handleSwitchLocale} className="pure-menu-link">
                <i className="fa fa-globe"></i> {locale.toUpperCase()}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ application }) => ({ application }),
  applicationActions
)(Menu);
