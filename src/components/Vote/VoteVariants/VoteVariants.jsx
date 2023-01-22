const VoteVariants = ({ leaveVote }) => {
  return (
    <>
      <button onClick={() => leaveVote('democrats')}>Democrats</button>
      <button onClick={() => leaveVote('republicants')}>Respublicants</button>
    </>
  );
};

export default VoteVariants;
