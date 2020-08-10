import React, { useState, useEffect } from "react";
import List from "./List";

// import { Container } from './styles';

function UserList() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadLists() {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      config.headers["Authorization"] =
        "Token 9337161f6bdf93bbc19ed06d9b9500f0037ccb5d";

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

  return (
    <div>
      <List name="Milha lista 1" />
      <List name="Milha lista 2" />
    </div>
  );
}

export default UserList;