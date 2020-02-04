import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid black;
  margin: auto;
`
const Square = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid black;
`

function App() {
  return (
    <Board>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </Board>
  );
}

export default App;
