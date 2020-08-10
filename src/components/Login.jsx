import React, { useState } from "react";

// import { Container } from './styles';

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(event) {
    alert(`Usuário: ${user}\nSenha: ${pass}`);
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
