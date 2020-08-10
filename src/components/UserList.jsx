import React, { useState, useEffect } from "react";
import List from "./List";
import Login from "./Login";

// import { Container } from './styles';

function UserList() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadLists() {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      config.headers["Authorization"] = "Token " + token;

      const url = "http://127.0.0.1:8000/lists/";

      setLoading(true);

      const res = await fetch(url, config);
      const data = await res.json();
      console.log(data);
      setLists(data);

      setLoading(false);
    }

    loadLists();
  }, [token]);

  return token ? (
    <div>
      {lists.map((list) => (
        <List key={list.id} name={list.name} items={list.item_set} />
      ))}
    </div>
  ) : (
    <Login />
  );
}

export default UserList;
