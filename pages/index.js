import React from 'react';
import axios from 'axios';

import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import BlogPost from '@/components/Common/BlogPost';
import PartnerStyle1 from '@/components/Common/PartnerStyle1';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import { useRouter } from 'next/router';
import Features from '@/components/HomeDemo2/Features';
import FooterStyleOne from '@/components/_App/FooterStyleOne';

const IndexPage = ({ posts, error }) => {
  const router = useRouter();

  const word = router?.query?.word || '';
  return (
    <>
      <NavbarStyleTwo />
      <FreeTrialStyle2 heading="Welcome to Dermi Club" word={word} />
      <Features />
      {error && <div>Internal Server Error</div>}

      {posts && <BlogPost posts={posts} />}
      <PartnerStyle1 />

      <FooterStyleOne />
    </>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  let posts = null;
  let error = null;
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/posts?populate=categories&populate=authors&populate=image'
    );
    posts = data.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { posts, error }, // will be passed to the page component as props
  };
}
