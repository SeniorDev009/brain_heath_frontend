import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";
const PostCard = ({ slug, image, title, category, author_name, description, bgColor }) => {
  return (
    <div
      className={`content-block post-list-view axil-control mt--30 ${bgColor || ""} `}
      key={slug}
    >
      {image ?
        <div className="post-thumbnail">
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                src={image}
                alt={title}
                height={250}
                width={295}
                priority={true}
              />
            </a>
          </Link>
          {/* {playBtn === true ?
            <Link href={`/post/${slug}`}>
              <a className="video-popup size-medium position-top-center icon-color-secondary"><span className="play-icon"></span></a>
            </Link>
            : ""} */}
        </div>
        : ""}

      <div className="post-content">
        <div className="post-cat">
          <div className="post-cat-list">
            <Link href={`/category/${slugify(category)}`}>
              <a className="hover-flip-item-wrapper">
                <span className="hover-flip-item">
                  <span data-text={category}>{category}</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        {/* {data.postFormat === 'quote' ?
        <blockquote>
          <h4 className="title">
            <Link href={`/post/${data.slug}`}>
              <a>{data.title}</a>
            </Link>
          </h4>
        </blockquote> : */}
        <h4 className="title">
          <Link href={`/post/${slug}`}>
            <a>{title}</a>
          </Link>
        </h4>
        <div>{description}</div>
        <div className="post-meta-wrapper">
          <div className="post-meta">
            <div className="content">
              <h6 className="post-author-name">
                {/* <Link href={`/author/${slugify(author_name)}`}> */}
                <a className="hover-flip-item-wrapper">
                  <span className="hover-flip-item">
                    <span data-text={author_name}>
                      {author_name}
                    </span>
                  </span>
                </a>
                {/* </Link> */}
              </h6>
              {/* <ul className="post-meta-list">
              <li>{data.date}</li>
              <li>{data.read_time}</li>
            </ul> */}
            </div>
          </div>
          <ul className="social-share-transparent justify-content-end">
            {/* {data.author_social.map((social) => (
            <li key={social.url}>
              <a href={social.url}>
                <i className={social.icon} />
              </a>
            </li>
          ))} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostCard