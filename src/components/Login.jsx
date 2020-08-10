import React, { useState } from "react";

// import { Container } from './styles';

function Login() {
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("admin");

  function handleSubmit(event) {
    const url = "http://127.0.0.1:8000/api-auth-token/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token));

    // alert(`Usuário: ${user}\nSenha: ${pass}`);
    event.preventDefault();
  }

  return (
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
  );
}

export default Login;
