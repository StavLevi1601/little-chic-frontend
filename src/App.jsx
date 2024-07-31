/* eslint-disable no-undef */

import { useState } from "react";
import "./App.css";
import { login } from "./assets/functions/login";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ flexDirection: "row" }}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div style={{ flexDirection: "row" }}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
