import React, { Component } from 'react';
import Controls from './Controls/Controls';
import css from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //////описываем пропТайпс
  };

  state = {
    value: this.props.initialValue,
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.Counter}>
        <span className={css.CounterValue}>{value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
