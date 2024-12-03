import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";

const LoginPage = () => {
  const { login, user } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')


  console.log(user);

  const handleSignup = (e) => {
    e.preventDefault();
    if (username) {
      login(username);
      alert(`Добро пожаловать, ${username}`);
      setUsername("");
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2 className="login-title">Войти в аккаунт</h2>
        <form action="" onSubmit={handleSignup}>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="sumait">Login</button>
          <Link to={"/signup"}>Зарегистрироваться</Link>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
