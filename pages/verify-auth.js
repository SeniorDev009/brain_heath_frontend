import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { verifyUser } from 'lib/auth';
const VerifyAuth = ({ authData, error }) => {
  console.log(authData, error);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== undefined && authData) {
      sessionStorage.setItem('jwt', JSON.stringify(authData.jwt));
      sessionStorage.setItem('user', JSON.stringify(authData.user));
      router.push('/');
    }
  }, []);
  return <div>VerifyAuth</div>;
};

export default VerifyAuth;

export async function getServerSideProps(context) {
  const { loginToken } = context.query;
  const { authData, error } = await verifyUser(loginToken);
  if (!authData) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  return {
    props: { authData, error }, // will be passed to the page component as props
  };
}
