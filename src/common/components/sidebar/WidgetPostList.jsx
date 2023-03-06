import Link from "next/link";
import Image from "next/image";

const WidgetPostList = ({ postData }) => {
  return (
    <div className="axil-single-widget widget widget_postlist mb--30">
      <h5 className="widget-title">More Options</h5>
      <div className="post-medium-block">
        <div className="content-block post-medium mb--20">
          {/* {data.featureImg ?
              <div className="post-thumbnail">
                <Link href={`/post/${data.slug}`}>
                  <a>
                    <Image
                      src={data.featureImg}
                      alt={data.title}
                      height={100}
                      width={100}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              : ""} */}
          <div className="post-content">
            <h6 className="title">
              <Link href={`/post`}>
                <a>title</a>
              </Link>
            </h6>
            <div className="post-meta">
              <ul className="post-meta-list">
                <li>data</li>
                <li>data</li>
              </ul>
            </div>
          </div>
        </div>
        {postData?.slice(0, 3).map((data) => (
          <div className="content-block post-medium mb--20" key={data.slug}>
            {data.featureImg ?
              <div className="post-thumbnail">
                <Link href={`/post/${data.slug}`}>
                  <a>
                    <Image
                      src={data.featureImg}
                      alt={data.title}
                      height={100}
                      width={100}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              : ""}
            <div className="post-content">
              <h6 className="title">
                <Link href={`/post/${data.slug}`}>
                  <a>{data.title}</a>
                </Link>
              </h6>
              <div className="post-meta">
                <ul className="post-meta-list">
                  <li>{data.date}</li>
                  <li>{data.post_views}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetPostList;
