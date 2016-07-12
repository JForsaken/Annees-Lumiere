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
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this);
  }

  handleLanguageSwitch(evt) {
    this.props.switchLocale(evt.target.value);
  }

  render() {
    const { application: { locale } } = this.props;

    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">
            <FormattedMessage id="website.title" />
          </Link>

          <ul className="pure-menu-list">
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
          <form className="pure-form language-switcher">
            <fieldset>
              <select
                ref="langSwitcher"
                value={locale}
                onChange={this.handleLanguageSwitch}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ application }) => ({ application }),
  applicationActions
)(Menu);
