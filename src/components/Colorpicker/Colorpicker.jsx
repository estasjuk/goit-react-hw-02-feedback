import React, { Component } from 'react';
import css from './Colorpicker.module.css';

class Colorpicker extends Component {
  state = {
    activeOptionIndex: 2,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [`${css.ColorPickerOption}`];
    if (index === this.state.activeOptionIndex) {
      optionClasses.push(`${css.ColorPickerOptionActive}`);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPickerTitle}>Color picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Colorpicker;
