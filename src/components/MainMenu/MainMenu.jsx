import React, { Component } from 'react';
import css from './MainMenu.module.css';
import PropTypes from 'prop-types';

class MainMenu extends Component {
  static defaultProps = {
    items: [],
  };

  state = {
    activeIndex: 0,
  };

  handleClick(idx) {
    this.setState({ activeIndex: idx });
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    const elements = items.map(({ id, text, link }, index) => (
      <li key={id}>
        <a
          onClick={() => this.handleClick(index)}
          className={
            activeIndex === index ? `${css.linkActive} ${css.link}` : css.link
          }
          href={link}
        >
          {text}{' '}
        </a>
      </li>
    ));
    return <ul className={css.menu}>{elements}</ul>;
  }
}
export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
