import React, { useState, useEffect } from "react";
import UserList from "./UserList";

// import { Container } from './styles';

function Login() {
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("admin");
  const [token, setToken] = useState(null);

  function handleSubmit(event) {
    const url = "http://127.0.0.1:8000/api-auth-token/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      });

    // alert(`Usuário: ${user}\nSenha: ${pass}`);
    event.preventDefault();
  }
  function logout() {
    localStorage.removeItem("token")
    setToken(null)
  }

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  return !token ? (
    <form onSubmit={handleSubmit}>
      <label>
        Usuário:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  ) : (
    <div>
      <UserList />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Login;
