import axios from 'axios';

export const verifyUser = async (loginToken) => {
  let authData = null;
  let error = null;
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/passwordless/login?loginToken=${loginToken}`
    );
    authData = data;
  } catch (error) {
    error = error.response;
  }
  return { authData, error };
};
