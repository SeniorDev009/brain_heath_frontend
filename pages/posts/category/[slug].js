import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import SearchWidget from '@/components/Blog/SearchWidget';
import PostContent from '@/components/Blog/PostContent';
import FooterStyleOne from '@/components/_App/FooterStyleOne';

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
      <PageBannerStyle1
        pageTitle="Articles"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Category Posts"
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
                {posts &&
                  posts.length > 0 &&
                  posts.map((post) => (
                    <div
                      className="col-lg-12 col-md-6"
                      key={post.attributes.slug}
                    >
                      <div className="single-blog-post">
                        {/* <div className="image">
                        <Link href={`/posts/${post.attributes.slug}`}>
                          <a className="d-block h-10" style={{ height: '70%' }}>
                            <img src="/images/blog/blog1.jpg" alt="blog" />
                          </a>
                        </Link>
                        <Link href="/blog-grid">
                          <a className="tag">Branding</a>
                        </Link>
                      </div> */}
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
            {/* <ReactPaginate
              previousLabel={<i className="fas fa-arrow-left"></i>}
              nextLabel={<i className="fas fa-arrow-right"></i>}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'pagination'}
              previousLinkClassName={'prev'}
              nextLinkClassName={'next'}
              disabledClassName={'disabled'}
              activeClassName={'current'}
            /> */}
          </div>
        </div>
      </div>
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
      `http://localhost:1337/api/categories?populate=posts.categories&populate=posts.authors&populate=posts.image&filters[$and][0][slug][$eq]=${slug}`
    );
    const { data: categoriesData } = await axios.get(
      'http://localhost:1337/api/categories'
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
