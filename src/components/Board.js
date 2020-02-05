import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Border = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid black;
  margin: auto;
`
export default function Board ({board, clickHandler}) {
  return(
    <Border>
      {board.map((val, idx) => 
        <Square value={val} key={idx} 
        clickHandler={()=>clickHandler(idx)}/> )}
    </Border>
  )
}
 
  
