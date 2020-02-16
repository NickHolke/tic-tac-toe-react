import React from 'react';
import Board from './Board';
import MoveHistory from './MoveHistory';
import isWon from '../helper';
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
      turn: 'AI',
      round: 0,
      gameOver: false,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.jumpHandler = this.jumpHandler.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  componentDidMount(){
    const board = this.state.history[0].board;
    this.computerTurn(board);
  }

  computerTurn(board) {
    if (this.state.history.length === this.state.round + 1 && !this.state.gameOver) {
      let newBoard = board.slice();
      console.log(newBoard)

      for (let i = 0; i < board.length; i++) {
        if (newBoard[i] === '') {
          newBoard[i] = 'X';
          break;
        }
      }

      let history = this.state.history;
      history.push({board: newBoard});

      this.setState({
        history,
        turn: 'Human',
        round: this.state.round + 1,
      });

      if (isWon(newBoard)) {
        this.setState({
          gameOver: true,
        })
      }
    }
  }

  clickHandler(i, board) {
    if (board[i] === '' && this.state.history.length === this.state.round + 1 && !this.state.gameOver) {
      let newBoard = board.slice();
      newBoard[i] = 'O';
      
      let history = this.state.history;
      history.push({board: newBoard});

      if (isWon(newBoard)) {
        this.setState({
          gameOver: true,
        })
      }

      this.setState({
        history,
        turn: 'AI',
        round: this.state.round + 1,
      }, () => {
        this.computerTurn(newBoard);
      }); 
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
      turn: 'AI',
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
        {/* <MoveHistory history={this.state.history}
        turn={this.state.turn} jumpHandler={this.jumpHandler}
        gameOver={this.state.gameOver} restartGame={this.restartGame}/> */}
      </Wrapper>
    )
  }
}
