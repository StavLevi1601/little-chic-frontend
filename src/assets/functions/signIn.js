import axios from "axios";

export const signInFunction = async (username, password) => {
  console.log(username, password);
  alert("nice");
  const auth = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth`, {
    username,
    password,
  });

  if (auth.status === 200) {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}users/signin`,
      {
        username,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      }
    );
    console.log(result);
  }
};
