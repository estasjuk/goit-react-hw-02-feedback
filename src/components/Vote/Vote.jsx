import { Component } from 'react';
import VoteResults from './VoteResults/VoteResults';
import VoteVariants from './VoteVariants/VoteVariants';
import VoteBlock from './VoteBlock/VoteBlock';
import css from './Vote.module.css';

class Vote extends Component {
  state = {
    democrats: 0,
    republicants: 0,
  };

  calcTotal() {
    const { democrats, republicants } = this.state;
    const total = democrats + republicants;
    return total;
  }

  calcPercent(propName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  leaveVote = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.calcTotal();
    const democratePercent = this.calcPercent('democrats');
    const republicantsPercent = this.calcPercent('republicants');
    return (
      <div>
        <h3 className={css.title}>Leave your vote</h3>
        <div className={css.wrapper}>
          <VoteBlock title="Vote variants">
            <VoteVariants leaveVote={this.leaveVote} />
          </VoteBlock>
          <VoteBlock title="Vote results">
            <VoteResults
              total={total}
              democratePercent={democratePercent}
              republicantsPercent={republicantsPercent}
            />
          </VoteBlock>
        </div>
      </div>
    );
  }
}

export default Vote;
