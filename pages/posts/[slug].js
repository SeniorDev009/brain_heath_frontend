import React, { useEffect } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  TelegramShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  TelegramIcon,
} from 'react-share';

import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import FooterStyleOne from '@/components/_App/FooterStyleOne';

const BlogGrid = ({ post, error, categories }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const jwt = sessionStorage.getItem('jwt');
      if (!jwt) {
        router.push('/sign-in');
      }
    }
  }, []);

  const shareUrl = `http://localhost:3000/${post?.slug}` || '';

  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
      />
      {error && <div>Internal Server error</div>}
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Link
                    href={`/posts/category/${post?.categories.data[0].attributes.slug}`}
                  >
                    <a className="tag">
                      {post?.categories?.data[0]?.attributes.title}
                    </a>
                  </Link>
                  <Link href={`/posts/${post?.slug}`}>
                    <a className="d-block">
                      {post?.image?.data?.attributes?.url ? (
                        <img
                          src={`http://localhost:1337${post?.image?.data?.attributes?.url}`}
                          alt="blog"
                        />
                      ) : (
                        <img src="/images/blog/blog1.jpg" alt="blog" />
                      )}
                    </a>
                  </Link>
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="ri-calendar-2-line"></i>
                        {moment(post?.publishedAt).format('DD-MM-YYYY')}
                      </li>
                      {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(4) Comments</a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>

                  <h4>{post.title}</h4>
                  <ReactMarkdown children={post.content} />
                </div>
                <div className="article-footer">
                  {post?.authors?.data?.length > 0 && (
                    <div className="post-author-meta">
                      <div className="d-flex align-items-center">
                        <img src="/images/user/user6.jpg" alt="user" />
                        <div className="title">
                          <span className="name">
                            By{' '}
                            <Link href="/blog-grid">
                              <a>
                                {post?.authors?.data[0].attributes.author_name}
                              </a>
                            </Link>
                          </span>
                          <span className="date">March 17, 2021</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                      </li>
                      <li>
                        <EmailShareButton url={shareUrl}>
                          <EmailIcon size={32} round={true} />
                        </EmailShareButton>
                      </li>
                      <li>
                        <TwitterShareButton url={shareUrl}>
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                      </li>
                      <li>
                        <TelegramShareButton url={shareUrl}>
                          <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Related Blog Post */}
                {/* <RelatedPost /> */}

                {/* <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/images/user/user1.jpg"
                              className="avatar"
                              alt="user"
                            />
                            <b className="fn">John Jones</b>
                          </div>
                          <div className="comment-metadata">
                            <span>January 01, 2021 at 10:59 am</span>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div className="reply">
                          <Link href="/blog-details">
                            <a className="comment-reply-link">Reply</a>
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/images/user/user2.jpg"
                                  className="avatar"
                                  alt="user"
                                />
                                <b className="fn">Steven Smith</b>
                              </div>
                              <div className="comment-metadata">
                                <span>January 02, 2021 at 21:59 am</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>
                            <div className="reply">
                              <Link href="/blog-details">
                                <a className="comment-reply-link">Reply</a>
                              </Link>
                            </div>
                          </div>

                          <ol className="children">
                            <li className="comment">
                              <div className="comment-body">
                                <footer className="comment-meta">
                                  <div className="comment-author vcard">
                                    <img
                                      src="/images/user/user3.jpg"
                                      className="avatar"
                                      alt="user"
                                    />
                                    <b className="fn">Sarah Taylor</b>
                                  </div>
                                  <div className="comment-metadata">
                                    <span>January 03, 2021 at 05:59 am</span>
                                  </div>
                                </footer>
                                <div className="comment-content">
                                  <p>
                                    Lorem Ipsum has been the industry’s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen.
                                  </p>
                                </div>
                                <div className="reply">
                                  <Link href="/blog-details">
                                    <a className="comment-reply-link">Reply</a>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>

                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="/images/user/user4.jpg"
                              className="avatar"
                              alt="user"
                            />
                            <b className="fn">John Doe</b>
                          </div>
                          <div className="comment-metadata">
                            <span>January 04, 2021 at 05:59 am</span>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div className="reply">
                          <Link href="/blog-details">
                            <a className="comment-reply-link">Reply</a>
                          </Link>
                        </div>
                      </div>

                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/images/user/user1.jpg"
                                  className="avatar"
                                  alt="user"
                                />
                                <b className="fn">James Anderson</b>
                              </div>
                              <div className="comment-metadata">
                                <span>January 05, 2021 at 04:59 am</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>
                            <div className="reply">
                              <Link href="/blog-details">
                                <a className="comment-reply-link">Reply</a>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave A Reply</h3>
                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked{' '}
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          placeholder="Your Name*"
                          name="author"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email*"
                          name="email"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input
                          type="url"
                          id="url"
                          placeholder="Website"
                          name="url"
                        />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="45"
                          placeholder="Your Comment..."
                          rows="5"
                          maxLength="65525"
                          required="required"
                        ></textarea>
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="comment-cookies-consent"
                          id="comment-cookies-consent"
                        />
                        <label htmlFor="comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="right-sidebar">
                <BlogSidebar categories={categories} showPopularPosts={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterStyleOne />
    </>
  );
};

export default BlogGrid;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let post = null;
  let error = null;
  let categories = null;
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/posts?populate=categories&populate=authors&populate=image&filters[$and][0][slug][$eq]=${slug}`
    );
    const { data: categoriesData } = await axios.get(
      'http://localhost:1337/api/categories'
    );
    post = data?.data[0]?.attributes;
    categories = categoriesData.data;
  } catch (error) {
    console.log(error);
    error = error;
  }
  return {
    props: { post, error, categories }, // will be passed to the page component as props
  };
}
