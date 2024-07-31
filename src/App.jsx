/* eslint-disable no-undef */

import { useState } from "react";
import "./App.css";
import { registerFunction } from "./assets/functions/register";
import { signInFunction } from "./assets/functions/signIn";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("sign in", signIn);
    console.log("register", register);
    if (signIn) {
      await signInFunction(username, password);
      setSignIn(false);
    }
    if (register) {
      await registerFunction(username, password);
      setRegister(false);
    }
    setUsername("");
    setPassword("");
  };

  const handleSignIn = () => {
    setSignIn(true);
  };

  const handleRegister = () => {
    setRegister(true);
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
          <button onClick={handleSignIn} value={signIn}>
            Sign in
          </button>
          <button onClick={handleRegister} value={signIn}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
