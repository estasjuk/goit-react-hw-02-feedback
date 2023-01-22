import React, { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const { visible } = this.state;
    return (
      <div className={css.Dropdown}>
        <button type="button" className="DropdownToggle" onClick={this.toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className={css.DropdownMenu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
