import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";
const PostCard = ({ slug, image, title, category, author_name, description, bgColor }) => {
  return (
    <div
      className={`post-list-view axil-control mt--50 ${bgColor || ""} `}
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

        {/* {data.postFormat === 'quote' ?
        <blockquote>
          <h4 className="title">
            <Link href={`/post/${data.slug}`}>
              <a>{data.title}</a>
            </Link>
          </h4>
        </blockquote> : */}
        <div className="h4">
          <Link href={`/post/${slug}`}>
            {title}
          </Link>
        </div>
        {/* {author_name && <div className="text-secondary lead -mt-30">
          by {author_name}
        </div>} */}
        <div className="text-dark mb-3">{description}</div>
        <Link href={`/category/${slugify(category)}`}>
          <a className="">
            <span className="lead">
              <span data-text={category}>{category}</span>
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostCard