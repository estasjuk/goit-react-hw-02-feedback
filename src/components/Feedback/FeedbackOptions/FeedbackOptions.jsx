import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ leaveVote }) => {
  return (
    <div className={css.vote}>
      <button onClick={() => leaveVote('good')} className={css.btn}>
        Good
      </button>
      <button onClick={() => leaveVote('neutral')} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => leaveVote('bad')} className={css.btn}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
