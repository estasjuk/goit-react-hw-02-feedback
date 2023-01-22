const VoteResults = ({ total, democratePercent, republicantsPercent }) => {
  return (
    <>
      <p>Total votes: {total}</p>
      <p>Democrats: {democratePercent}</p>
      <p>Respublicants: {republicantsPercent}</p>
    </>
  );
};

export default VoteResults;
