import React from "react";
import Item from "./Item";

// import { Container } from './styles';

function List(props) {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <Item name="Item 1" />
        <Item name="Item 2" />
        <Item name="Item 3" />
      </ul>
    </div>
  );
}

export default List;
