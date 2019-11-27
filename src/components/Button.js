import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  handleClick(event){
    this.props.onClick(event);
  }

  render() {
    return <button onClick={(event) => this.handleClick(event)}>
        {this.props.children}
      </button>
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
}

export { Button};