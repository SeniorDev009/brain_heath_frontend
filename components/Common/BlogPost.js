import React from 'react';
import Link from 'next/link';
import moment from 'moment';
const BlogPost = ({ posts }) => {
  return (
    <>
      <div className="blog-area pb-75">
        <div className="container">
          <div className="row justify-content-center">
            {posts &&
              posts.length > 0 &&
              posts.map((post) => (
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog-post">
                    <div className="image">
                      <Link href={`/posts/${post.attributes.slug}`}>
                        <a className="d-block">
                          {post?.attributes?.image?.data?.attributes?.url ? (
                            <img
                              src={`http://localhost:1337${post?.attributes?.image?.data?.attributes?.url}`}
                              alt="blog"
                            />
                          ) : (
                            <img src="/images/blog/blog1.jpg" alt="blog" />
                          )}
                        </a>
                      </Link>

                      <Link
                        href={`/posts/category/${post.attributes.categories.data[0].attributes.slug}`}
                      >
                        <a className="tag">
                          {post.attributes.categories.data[0].attributes.title}
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <i className="ri-time-line"></i>
                          {moment(post.attributes.publishedAt).format(
                            'DD-MM-YYYY'
                          )}
                        </li>
                        {post?.authors?.data?.length > 0 &&
                          post.authors.data.map((author) => (
                            <li key={author.attributes.slug}>
                              <i className="ri-message-2-line"></i>
                              <Link
                                href={`/posts/author/${author.attributes.slug}`}
                              >
                                <a>{author.attributes.author_name}</a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                      <h3>
                        <Link href={`/posts/${post.attributes.slug}`}>
                          <a>{post.attributes.title}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
