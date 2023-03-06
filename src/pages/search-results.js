import FooterOne from '../common/elements/footer/FooterOne';
import HeadTitle from '../common/elements/head/HeadTitle';
import PostCustom from '../common/components/post/PostCustom';
import algoliasearch from 'algoliasearch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { HeaderMain } from '../common/elements/header/HeaderMain';
import ReactPaginate from 'react-paginate';
import SidebarOne from '../common/components/sidebar/SidebarOne';
import PostCard from '../common/components/post/layout/PostCard';
const HomeDefault = ({ darkLogo, lightLogo }) => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  console.log(router);
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );

  let algoliaIndex = searchClient.initIndex('development_api::post.post');

  const getAllHits = async () => {
    try {
      const allHits = await algoliaIndex.search(searchKeyword);
      setPosts(allHits.hits);
      console.log(allHits);
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

              {posts.slice(pageVisited || 0, show).map((data, index) => (
                <PostCard
                  key={index}
                  slug={data.slug}
                  image={data?.image}
                  title={data.title}
                  category={data?.category || ''}
                  author_name={data?.author_name || ''}
                  description={data?.description || ''}
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

export default HomeDefault;

// export async function getServerSideProps(context) {
//   let posts = null;
//   let error = null;
//   try {
//     const { data } = await axios.get('http://localhost:1337/api/posts');
//     posts = data.data;
//   } catch (error) {
//     console.log(error);
//     error = error;
//   }
//   return {
//     props: { posts, error }, // will be passed to the page component as props
//   };
// }