import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import { useContext } from "react";
import Login from "./components/FirstPage";

function App() {
  return (
    <AuthProvider>
      <AppContext />
    </AuthProvider>
  );
}

function AppContext() {
  const { user } = useContext(AuthContext);
  console.log("user: ", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate replace to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
