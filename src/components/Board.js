import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Border = styled.div`
  display: grid;
  border: 4px solid #577aa4;
  border-radius: 10px;
  color: white;
  font-family: "Comic Sans MS";
  width: 600px;
  height: 600px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`
export default function Board ({board, clickHandler}) {
  return(
    <Border>
      {board.map((val, idx) => 
        <Square value={val} key={idx} 
        clickHandler={()=>clickHandler(idx, board)}/> )}
    </Border>
  )
}
 
  
