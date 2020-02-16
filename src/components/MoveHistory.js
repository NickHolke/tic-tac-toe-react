import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  width: 320px;
  // border: 1px solid black;
  margin-left: 10px;
  font-size: 30px;
`

const MoveHistory = ({history, turn, jumpHandler, gameOver}) => {
  let winner = turn === 'X' ? 'O' : 'X';
  return (
    <Container>
      {gameOver ? `Player ${winner} wins!!` : `Player ${turn} turn`}
      <ul>
        {history.map((board, round) => {
          return <li key={round} onClick={()=> jumpHandler(round)}>Jump to step {round}</li>
        })}
      </ul>
    </Container>
  )
}

export default MoveHistory;