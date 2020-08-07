import React from "react";

// import { Container } from './styles';

function Item(props) {
  const { name } = props;
  return <li>Descrição: {name}</li>;
}

export default Item;
