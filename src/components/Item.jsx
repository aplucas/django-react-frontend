import React from "react";

// import { Container } from './styles';

function Item(props) {
  const { name, status } = props;
  return (
    <li>
      Descrição: {name} - Status: {status ? <span>Finalizado</span> : <span>spanendente</span>}
    </li>
  );
}

export default Item;
