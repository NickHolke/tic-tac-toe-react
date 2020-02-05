import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid black;
`
export default function Square({value, clickHandler}) {
  return (
    <Tile onClick={clickHandler}>{value}</Tile>
  )
}
