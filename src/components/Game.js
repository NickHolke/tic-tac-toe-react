import React from 'react';
import Board from './Board';
import MoveHistory from './MoveHistory';
import {isWon, minimax} from '../helper';
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
      winner: false,
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
    //debugger;
    if (this.state.history.length === this.state.round + 1 && !this.state.gameOver) {
      let newBoard = board.slice();

      let bestScore = -Infinity;
      let bestMove;
      for (let i = 0; i < board.length; i++) {
        if (newBoard[i] === '') {
          newBoard[i] = 'X';
          let score = minimax(newBoard, false);
          //console.log(score)
          newBoard[i] = '';
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      newBoard[bestMove] = 'X';

      let history = this.state.history;
      history.push({board: newBoard});

      this.setState({
        history,
        turn: 'Human',
        round: this.state.round + 1,
        winner: isWon(newBoard),
      });
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
        winner: isWon(newBoard),
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
      winner: false,
    }, () => {
      this.computerTurn(this.state.history[0].board);
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
        winner={this.state.winner} restartGame={this.restartGame}/>
      </Wrapper>
    )
  }
}
