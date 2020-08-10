import React, { useState, useEffect } from "react";
import List from "./List";
import Login from "./Login";

// import { Container } from './styles';

function UserList() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    async function loadLists() {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      config.headers["Authorization"] =
        "Token 	efb8733fafe4e7e4268a5514136191764724dc3c";

      const url = "http://127.0.0.1:8000/lists/";

      setLoading(true);

      const res = await fetch(url, config);
      const data = await res.json();
      console.log(data);
      setLists(data);

      setLoading(false);
    }

    loadLists();
  }, []);

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
