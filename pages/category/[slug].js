import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import { useRouter } from 'next/router';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import Features from '@/components/HomeDemo2/Features';
import BlogPost from '@/components/Common/BlogPost';

const Category = ({ posts, categories }) => {
  const router = useRouter();

  const word = router?.query?.word || '';
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const jwt = sessionStorage.getItem('jwt');
      if (!jwt) {
        router.push('/sign-in');
      }
    }
  }, []);

  return (
    <React.Fragment>
      <NavbarStyleTwo />
      <FreeTrialStyle2 heading="Welcome to Dermi Club" word={word} />
      <Features />

      <BlogPost posts={posts} />

      <FooterStyleOne />
    </React.Fragment>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let posts = null;
  let error = null;
  let categories = null;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/categories?populate=posts.categories&populate=posts.authors&populate=posts.image&filters[$and][0][slug][$eq]=${slug}`
    );
    const { data: categoriesData } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_KEY}/api/categories`
    );
    posts = data.data[0].attributes.posts.data;
    categories = categoriesData.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { posts, error, categories }, // will be passed to the page component as props
  };
}
