import React from 'react';
import Board from './Board';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{board: new Array(9).fill('')}],
      turn: 'X',
      round: 0,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(i, board) {
    if (board[i] === '') {
      board[i] = this.state.turn;
      let history = this.state.history;
      history.push({board});

      this.setState({
        history,
        turn: this.state.turn === 'X' ? 'O' : 'X',
        round: this.state.round + 1,
      }, () => {
        isWon(board);
      })
    }
  }

  render() {
    const round = this.state.round;
    const board = this.state.history[round].board;
    return(
      <Wrapper>
        <Board board={board}
        clickHandler={this.clickHandler} />
      </Wrapper>
    )
  }
}

function isWon(board) {
  let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  for (let i = 0; i < combos.length; i++) {
    const [a,b,c] = combos[i];
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      console.log('game won');
      return true;
    }
  }

  return false;
}