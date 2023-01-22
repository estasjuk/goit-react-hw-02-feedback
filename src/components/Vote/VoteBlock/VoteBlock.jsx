import css from './VoteBlock.module.css';

const VoteBlock = ({ children, title }) => {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
};

export default VoteBlock;
