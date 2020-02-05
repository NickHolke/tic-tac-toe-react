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
    let newBoard = this.state.board;
    newBoard[i] = this.state.turn;
    this.setState({
      board: newBoard,
      turn: this.state.turn === 'X' ? 'O' : 'X',
    })
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