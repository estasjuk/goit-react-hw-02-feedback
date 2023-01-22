import { Component } from 'react';
import css from './ToggleButton.module.css';
import PropTypes from 'prop-types';

class ToggleButton extends Component {
  static defaultProps = {
    type: 'submit',
  };

  state = {
    active: true,
  };

  handleClick = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };
  render() {
    const { type, text } = this.props;
    const { active } = this.state;
    return (
      <button
        onClick={this.handleClick}
        className={active ? `${css.btnActive} ${css.btn}` : css.btn}
        type={type}
      >
        {text}
      </button>
    );
  }
}

export default ToggleButton;

ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
