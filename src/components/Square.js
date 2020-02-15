import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  border: 4px solid #577aa4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background: #94bbe9;
  cursor: pointer;
`
export default function Square({value, clickHandler}) {
  return (
    <Tile onClick={clickHandler}>{value}</Tile>
  )
}
