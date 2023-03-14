import React, { useEffect } from 'react';
import Link from 'next/link';
import moment from 'moment';
const PostContent = ({ data, setActivePost }) => {
  useEffect(() => {
    return () => setActivePost(null);
  }, []);
  return (
    <div className="content">
      <div className="image">
        {/* <Link href={`/posts/${data.slug}`}>
          {data?.image?.url ? (
            <img src={`${process.env.NEXT_PUBLIC_API_KEY}${data?.image?.url}`} alt="blog" />
          ) : (
            <img src="/images/blog/blog1.jpg" alt="blog" />
          )}
        </Link> */}
        <Link href="/blog-grid">
          <a className="tag">Branding</a>
        </Link>
      </div>
      <h3>
        <Link href={`/posts/${data?.slug}`}>
          <a
            onMouseOver={() => setActivePost(data)}
            onMouseOut={() => {
              setTimeout(() => {
                setActivePost(null);
              }, [10000]);
            }}
          >
            {data?.title}
          </a>
        </Link>
      </h3>
      <div>{data?.description}</div>
      <ul className="meta">
        <li>
          <i className="ri-time-line"></i>{' '}
          {moment(data?.publishedAt).format('DD-MM-YYYY')}
        </li>
        {data?.authors?.data?.length > 0 &&
          data.authors.data.map((author) => (
            <li key={author?.attributes?.slug}>
              <i className="ri-message-2-line"></i>
              <Link href={`/posts/author/${author?.attributes?.slug}`}>
                <a>{author?.attributes?.author_name}</a>
              </Link>
            </li>
          ))}
        {data?.categories?.data?.length > 0 &&
          data.categories.data.map((cate) => (
            <li key={cate?.attributes?.slug}>
              <i className="ri-message-2-line"></i>
              <Link href={`/posts/category/${cate?.attributes?.slug}`}>
                <a>{cate?.attributes?.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostContent;
