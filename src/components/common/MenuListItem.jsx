import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class MenuListItem extends Component {
  static defaultProps = { isExternal: false };
  static propTypes = {
    icon: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.any.isRequired,
    onClick: PropTypes.any,
  };

  renderLink() {
    let link = (
      <Link to={this.props.link} onClick={this.props.onClick}>
        <i className={this.props.icon}></i> {this.props.text}
      </Link>
    );

    if (this.props.isExternal) {
      link = (
        <a href={this.props.link} target="_blank">
          <i className={this.props.icon}></i> {this.props.text}
        </a>
      );
    }

    return link;
  }

  render() {
    return (
      <li>
        {this.renderLink()}
      </li>
    );
  }
}
