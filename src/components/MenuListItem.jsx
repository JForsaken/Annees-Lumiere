import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class MenuListItem extends Component {
  static defaultProps = { isExternal: false };
  static propTypes = {
    icon: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  renderLink() {
    let link = (
      <Link to={this.props.link} className="pure-menu-link">
        <i className={this.props.icon}></i> {this.props.text}
      </Link>
    );

    if (this.props.isExternal) {
      link = (
        <a href={this.props.link} target="_blank" className="pure-menu-link">
          <i className={this.props.icon}></i> {this.props.text}
        </a>
      );
    }

    return link;
  }

  render() {
    return (
      <li className="pure-menu-item">
        {this.renderLink()}
      </li>
    );
  }
}
