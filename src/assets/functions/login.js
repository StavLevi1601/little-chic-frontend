import axios from "axios";

export const login = async (username, password) => {
  console.log(username, password);
  alert("nice");
  const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth`, {
    username,
    password,
  });
  console.log(result);
};
