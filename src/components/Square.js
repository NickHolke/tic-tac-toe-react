import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  width: 200px;
  height: 200px;
  margin: 0px 5px 0px 5px;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
`
export default function Square({value, clickHandler}) {
  return (
    <Tile onClick={clickHandler}>{value}</Tile>
  )
}
