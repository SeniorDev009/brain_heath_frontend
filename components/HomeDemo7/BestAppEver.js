import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
  return (
    <>
      <div className="app-ever-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-image">
                <img
                  src="/images/home-7-8-9/app-ever/app-ever.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="list">
                  <li>
                    <div className="icon bg2">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Lorem Ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Lorem Ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                </ul>
                <div className="btn-box">
                  {/* <Link href="/app-download">
                    <a className="default-btn">Start Free Trial</a>
                  </Link> */}
                  <Link href="/posts">
                    <a className="link-btn">See Our Articles</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-ever-shape-1">
          <img src="/images/home-7-8-9/app-ever/shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
