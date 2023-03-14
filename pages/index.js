import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import BlogPost from '@/components/Common/BlogPost';
import PartnerStyle1 from '@/components/Common/PartnerStyle1';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import { useRouter } from 'next/router';
import Features from '@/components/HomeDemo2/Features';
import FooterStyleOne from '@/components/_App/FooterStyleOne';

const IndexPage = ({ postsData, error }) => {
  const router = useRouter();
  const [posts, setPosts] = useState(postsData);
  const [category, setCategory] = useState('');
  const word = router?.query?.word || '';
  const fetchByCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/categories?populate=posts.categories&populate=posts.authors&populate=posts.image&filters[$and][0][slug][$eq]=${category}`
      );
      setPosts(data?.data[0]?.attributes.posts.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category) {
      fetchByCategory();
    }
  }, [category]);
  useEffect(() => {
    if (typeof window !== undefined) {
      const jwt = sessionStorage.getItem('jwt');
      if (!jwt) {
        router.push('/sign-in');
      }
    }
  }, []);
  return (
    <>
      <NavbarStyleTwo />
      <FreeTrialStyle2 heading="Welcome to Dermi Club" word={word} />
      <Features setCategory={setCategory} />
      {error && <div>Internal Server Error</div>}

      {posts && <BlogPost posts={posts} />}
      <PartnerStyle1 />

      <FooterStyleOne />
    </>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  let postsData = null;
  let error = null;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/posts?populate=categories&populate=authors&populate=image`
    );
    postsData = data.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { postsData, error }, // will be passed to the page component as props
  };
}
