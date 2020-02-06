import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Border = styled.div`
  display: flex;
  width: 640px;
  height: 640px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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
 
  
