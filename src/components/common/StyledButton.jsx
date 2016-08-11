/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { cloneDeep } from 'lodash';

/* Components */
const RadiumLink = radium(Link);

const style = {
  styledButton: {
    border: '2px solid#404040',
    padding: '.5em 1em',
    fontWeight: 700,
    fontSize: 20,
    color: '#404040',
    backgroundColor: 'rgba(0,0,0,0)',
    textDecoration: 'none',
    borderRadius: '2px',
    ':hover': {
      cursor: 'pointer',
      border: '2px solid black',
      backgroundColor: 'black',
      color: 'white',
    },
  },

};

@radium
export default class StyledButton extends Component {
  static propTypes: {
    textId: React.PropTypes.string.required,
    link: React.PropTypes.string.required,
    isReversed: React.PropTypes.bool,
    size: React.PropTypes.string,
  };

  static defaultProps = {
    isReversed: false,
    size: 'md',
  };

  render() {
    const clonedStyle = cloneDeep(style.styledButton);

    if (this.props.isReversed) {
      clonedStyle.border = '2px solid white';
      clonedStyle.color = 'white';
    }

    if (this.props.size !== 'md') {
      switch (this.props.size) {
        case 'xs':
          clonedStyle.fontSize = style.styledButton.fontSize - 10;
          break;
        case 'sm':
          clonedStyle.fontSize = style.styledButton.fontSize - 5;
          break;
        case 'lg':
          clonedStyle.fontSize = style.styledButton.fontSize + 5;
          break;
        case 'xl':
          clonedStyle.fontSize = style.styledButton.fontSize + 10;
          break;
        default:
          break;
      }
    }

    return (
      <RadiumLink style={clonedStyle} to={this.props.link}>
        <FormattedMessage id={this.props.textId} />
      </RadiumLink>
    );
  }
}
