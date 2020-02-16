import React from 'react';
import Board from './Board';
import MoveHistory from './MoveHistory';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{board: new Array(9).fill('')}],
      turn: 'X',
      round: 0,
      gameOver: false,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.jumpHandler = this.jumpHandler.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  clickHandler(i, board) {
    if (board[i] === '' && this.state.history.length === this.state.round + 1 && !this.state.gameOver) {
      let newBoard = board.slice();
      newBoard[i] = this.state.turn;
      
      let history = this.state.history;
      history.push({board: newBoard});

      this.setState({
        history,
        turn: this.state.turn === 'X' ? 'O' : 'X',
        round: this.state.round + 1,
      });

      if (isWon(newBoard)) {
        this.setState({
          gameOver: true,
        })
      }
    }
  }

  jumpHandler(round) {
    this.setState({
      round,
    })
  }

  restartGame() {
    this.setState({
      history: [{board: new Array(9).fill('')}],
      turn: 'X',
      round: 0,
      gameOver: false,
    });
  }

  render() {
    const round = this.state.round;
    const board = this.state.history[round].board;
    return(
      <Wrapper>
        <Board board={board}
        clickHandler={this.clickHandler} />
        <MoveHistory history={this.state.history}
        turn={this.state.turn} jumpHandler={this.jumpHandler}
        gameOver={this.state.gameOver} restartGame={this.restartGame}/>
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