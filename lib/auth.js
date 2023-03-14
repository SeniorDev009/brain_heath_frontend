import axios from 'axios';

export const verifyUser = async (loginToken) => {
  let authData = null;
  let error = null;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/passwordless/login?loginToken=${loginToken}`
    );
    authData = data;
  } catch (error) {
    error = error.response;
  }
  return { authData, error };
};
