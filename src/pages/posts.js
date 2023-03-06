import React, { useState } from 'react';
import axios from 'axios';
import { HeaderMain } from '../common/elements/header/HeaderMain';
import HeadTitle from '../common/elements/head/HeadTitle';
import FooterOne from '../common/elements/footer/FooterOne';
import PostCustom from '../common/components/post/PostCustom';
import ReactPaginate from 'react-paginate';
import SidebarOne from '../common/components/sidebar/SidebarOne';
import PostCard from '../common/components/post/layout/PostCard';

const Posts = ({ posts, error, darkLogo, lightLogo }) => {
  console.log(posts);
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
      <HeaderMain
        pClass='pClass="header-light header-sticky header-with-shadow"'
        darkLogo={darkLogo}
        lightLogo={lightLogo}
      />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {/* <PostLayoutTwo
                dataPost={allPosts}
                show={pageVisited + blogsPerPage}
                postStart={pageVisited}
              /> */}

              {posts && posts.length > 0 && <PostCustom postData={posts} />}

              {posts.slice(pageVisited || 0, show).map((data, index) => (
                <PostCard
                  key={index}
                  slug={data.attributes.slug}
                  image={data.attributes?.image}
                  title={data.attributes.title}
                  category={data.attributes.category}
                  author_name={data.attributes.author_name}
                  description={data.attributes.description}
                  bgColor=""
                />
              ))}
              <FooterOne />
              <ReactPaginate
                previousLabel={<i className="fas fa-arrow-left"></i>}
                nextLabel={<i className="fas fa-arrow-right"></i>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'prev'}
                nextLinkClassName={'next'}
                disabledClassName={'disabled'}
                activeClassName={'current'}
              />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <SidebarOne dataPost={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;

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
