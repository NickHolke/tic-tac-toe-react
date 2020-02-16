import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 320px;
  // border: 1px solid black;
  margin-left: 10px;
  font-size: 30px;
`
const Span = styled.span`
  font-size: 40px;
  cursor: pointer;
`
const Button = styled.button`
  width: 200px;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
`
const Li = styled.li`
  cursor: pointer;
`

const MoveHistory = ({history, turn, jumpHandler, gameOver, restartGame}) => {
  let winner = turn === 'X' ? 'O' : 'X';
  return (
    <Container>
      <Span>{gameOver ? `Player ${winner} wins!!` : `Player ${turn} turn`}</Span>
      <ul>
        {history.map((board, round) => {
          return <Li key={round} onClick={()=> jumpHandler(round)}>Jump to step {round}</Li>
        })}
      </ul>
      <Button onClick={restartGame}>Restart Game</Button>
    </Container>
  )
}

export default MoveHistory;