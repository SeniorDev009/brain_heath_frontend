import React, { useState } from 'react';
import axios from 'axios';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import { useRouter } from 'next/router';
import SearchWidget from '@/components/Blog/SearchWidget';
import PostContent from '@/components/Blog/PostContent';

const Posts = ({ posts, error, categories }) => {
  const router = useRouter();

  const word = router?.query?.word || '';
  const [activePost, setActivePost] = useState(null);
  return (
    <React.Fragment>
      <NavbarStyleTwo />
      <PageBannerStyle1
        pageTitle="Articles"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Posts"
      />

      <div className="blog-area ptb-100">
        <div className="container" style={{ position: 'relative' }}>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
                {/* search widget */}
                <div>
                  <SearchWidget word={word} />
                </div>
                {error && <div>Internal Server Error</div>}
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => (
                    <div
                      className="col-lg-12 col-md-6"
                      key={post.attributes.slug}
                    >
                      <div className="single-blog-post">
                        <PostContent
                          data={post.attributes}
                          activePost={activePost}
                          setActivePost={setActivePost}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="right-sidebar"
                style={{ position: 'sticky', top: '90px' }}
              >
                <BlogSidebar
                  showPopularPosts={false}
                  categories={categories}
                  showArticleOverview={activePost ? true : false}
                  postDetails={activePost}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterStyleOne />
    </React.Fragment>
  );
};

export default Posts;

export async function getServerSideProps() {
  let posts = null;
  let error = null;
  let categories = null;
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/posts?populate=categories&populate=authors&populate=image'
    );
    const { data: categoriesData } = await axios.get(
      'http://localhost:1337/api/categories'
    );
    posts = data.data;
    categories = categoriesData.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { posts, error, categories }, // will be passed to the page component as props
  };
}
