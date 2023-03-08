import React, { useState } from 'react';
import axios from 'axios';
import { HeaderMain } from '../common/elements/header/HeaderMain';
import HeadTitle from '../common/elements/head/HeadTitle';
import FooterOne from '../common/elements/footer/FooterOne';
import PostCustom from '../common/components/post/PostCustom';
import ReactPaginate from 'react-paginate';
import SidebarOne from '../common/components/sidebar/SidebarOne';
import PostCard from '../common/components/post/layout/PostCard';

const HomePage = ({ posts, error, darkLogo, lightLogo }) => {
  const [blogs] = useState(posts);
  const [pageNumber, setPageNumber] = useState(0);

  const blogsPerPage = 5;
  const pageVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const show = pageVisited + blogsPerPage;
  return (
    <>
      <HeadTitle pageTitle="Brain Health" />
    </>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  let posts = null;
  let error = null;
  try {
    const { data } = await axios.get('http://localhost:1337/api/posts');
    posts = data.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { posts, error }, // will be passed to the page component as props
  };
}
