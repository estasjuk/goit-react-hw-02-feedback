import React, { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  render() {
    return (
      <div className={css.Dropdown}>
        <button type="button" className={css.DropdownToggle}>
          Показать
        </button>
        <div className={css.DropdownMenu}>Выпадающее меню</div>
      </div>
    );
  }
}

export default Dropdown;
