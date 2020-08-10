import React from "react";
import Item from "./Item";

// import { Container } from './styles';

function List(props) {
  const { name, items } = props;
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} name={item.name} status={item.done} />
        ))}
      </ul>
    </div>
  );
}

export default List;
