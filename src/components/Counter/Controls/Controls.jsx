import React from 'react';
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.CounterControls}>
    <button type="button" onClick={onIncrement} className={css.CounterButton}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement} className={css.CounterButton}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
