import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveVote }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          onClick={() => leaveVote(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
