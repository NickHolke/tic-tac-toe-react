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

const MoveHistory = ({history, turn, jumpHandler, winner, restartGame}) => {
  const move = turn === 'Human' ? 'O' : 'X';
  return (
    <Container>
      <Span>{winner ? `${winner}`: `Player ${move} turn`}</Span>
      
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