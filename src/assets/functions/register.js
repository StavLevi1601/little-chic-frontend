// register.js
import axios from "axios";

export const registerFunction = async (username, password) => {
  try {
    const auth = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth`, {
      username,
      password,
    });

    if (auth.status === 200) {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}users/register`,
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
      return result;
    }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
