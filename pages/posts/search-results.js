import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import algoliasearch from 'algoliasearch';

import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import SearchWidget from '@/components/Blog/SearchWidget';
import PostContent from '@/components/Blog/PostContent';

const SearchPosts = ({ error, categories }) => {
  const router = useRouter();
  const word = router?.query?.word || '';
  const [posts, setPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(word);
  const [activePost, setActivePost] = useState(null);

  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );
  let algoliaIndex = searchClient.initIndex('development_api::post.post');

  const getAllHits = async () => {
    try {
      const allHits = await algoliaIndex.search(searchKeyword);
      setPosts(allHits.hits);
    } catch (error) {}
  };

  const [blogs] = useState(posts);
  const [pageNumber, setPageNumber] = useState(0);

  const blogsPerPage = 5;
  const pageVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blogs.length / blogsPerPage);
  const show = pageVisited + blogsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (router.query) {
      const word = router?.query?.word || '';
      setSearchKeyword(word);
    } else {
      setSearchKeyword('');
    }
  }, [router.query]);

  useEffect(() => {
    getAllHits();
  }, [searchKeyword]);

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
        homePageUrl="/posts"
        homePageText="Posts"
        activePageText="Search Results"
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
                {error && <div>Internal Sever Error</div>}
                {posts &&
                  posts?.length > 0 &&
                  posts?.map((post) => (
                    <div className="col-lg-12 col-md-6" key={post.slug}>
                      <div className="single-blog-post">
                        <PostContent
                          data={post}
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

export default SearchPosts;

export async function getServerSideProps(context) {
  let posts = null;
  let error = null;
  let categories = null;
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/posts?populate=categories&populate=authors'
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
