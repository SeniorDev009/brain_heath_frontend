import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
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
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const BlogSidebar = ({
  showPopularPosts = true,
  categories = null,
  tags = null,
  showArticleOverview = false,
  postDetails,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const shareUrl =
    (postDetails && `http://localhost:3000/${postDetails?.slug}`) || '';
  return (
    <>
      <div className="widget-area">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          <div className="d-flex flex-column p-4 gap-4 justify-content-center align-items-center">
            <h2>Share Now</h2>
            <div className="d-flex gap-2">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
            </div>
            <button className="btn-dark w-100" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
        {showPopularPosts && (
          <div className="widget widget_posts_thumb">
            <h3 className="widget-title">Popular Posts</h3>

            <article className="item">
              <Link href="/blog-details">
                <a className="thumb">
                  <span className="fullimage cover bg1" role="img"></span>
                </a>
              </Link>
              <div className="info">
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    <a>Being The Best-Selling Smart Phone This Year</a>
                  </Link>
                </h4>
                <span className="date">
                  <i className="ri-calendar-2-fill"></i> Jan 15, 2020
                </span>
              </div>
            </article>

            <article className="item">
              <Link href="/blog-details">
                <a className="thumb">
                  <span className="fullimage cover bg2" role="img"></span>
                </a>
              </Link>
              <div className="info">
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    <a>Love Songs Helped Me Through Heartbreak</a>
                  </Link>
                </h4>
                <span className="date">
                  <i className="ri-calendar-2-fill"></i> Jan 14, 2020
                </span>
              </div>
            </article>

            <article className="item">
              <Link href="/blog-details">
                <a className="thumb">
                  <span className="fullimage cover bg3" role="img"></span>
                </a>
              </Link>
              <div className="info">
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    <a>Two Fashion Designers Busy With 2020 Winter Fashion</a>
                  </Link>
                </h4>
                <span className="date">
                  <i className="ri-calendar-2-fill"></i> Jan 13, 2020
                </span>
              </div>
            </article>

            <article className="item">
              <Link href="/blog-details">
                <a className="thumb">
                  <span className="fullimage cover bg4" role="img"></span>
                </a>
              </Link>
              <div className="info">
                <h4 className="title usmall">
                  <Link href="/blog-details">
                    <a>Working in the Office is a Tradition For Women</a>
                  </Link>
                </h4>
                <span className="date">
                  <i className="ri-calendar-2-fill"></i> Jan 12, 2020
                </span>
              </div>
            </article>
          </div>
        )}

        {categories && categories.length > 0 && (
          <div
            className="widget widget_categories"
            style={{ position: 'sticky' }}
          >
            <h3 className="widget-title">Categories</h3>

            <ul>
              {categories.map((cat) => (
                <li>
                  {'> '}
                  <Link
                    href={`/posts/category/${cat.attributes.slug}`}
                    key={cat.attributes.slug}
                  >
                    {cat.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showArticleOverview && (
          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">About this article</h3>
            <h6 className="">{postDetails.title} </h6>
            <button
              style={{
                padding: '6px 20px',
                borderRadius: '0px',
                border: 'none',
                color: 'blue',
                // background: 'rgb(237 39 117 / 85%)',
              }}
              onClick={openModal}
            >
              Share
            </button>
            <br />
            <br />

            {postDetails?.categories?.data && (
              <span className="tagcloud">
                <Link href="/blog-right-sidebar">
                  <a>{postDetails?.categories?.data[0]?.attributes.title}</a>
                </Link>
              </span>
            )}
            <div>{postDetails.description}</div>
          </div>
        )}
        {tags && (
          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Tags</h3>

            <div className="tagcloud">
              <Link href="/blog-right-sidebar">
                <a>Advertisment</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Business</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Life</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Lifestyle</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Fashion</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Ads</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Inspiration</a>
              </Link>

              <Link href="/blog-right-sidebar">
                <a>Blog</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogSidebar;
