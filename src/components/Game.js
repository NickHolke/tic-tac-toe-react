import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Array(9).fill(''),
      turn: 'X',
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(i) {
    if (this.state.board[i] === '') {
      let newBoard = this.state.board;
      newBoard[i] = this.state.turn;
      this.setState({
        board: newBoard,
        turn: this.state.turn === 'X' ? 'O' : 'X',
      }, () => {
        isWon(this.state.board);
      })
    }
  }

  render() {
    return(
      <div>
        <Board board={this.state.board}
        clickHandler={this.clickHandler} />
      </div>
    )
  }
}

function isWon(board) {
  let combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  combos.forEach((combo) => {
    if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2] && 
      board[combo[0]]] !== '' && board[combo[1]] !== '' && board[combo[2]] !== '') {
      console.log('game won');
      return true;
    }
  })

  return false;
}