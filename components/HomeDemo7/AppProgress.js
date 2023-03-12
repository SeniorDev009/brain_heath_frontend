import React from 'react';
import Link from 'next/link';

const AppProgress = () => {
  return (
    <>
      <div className="new-app-progress-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-content">
                {/* <div className="big-text">Progress</div> */}
                <span className="sub-title">Lorem Ipsum</span>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {/* <Link href="/app-download">
                  <a className="default-btn">Start Free Trial</a>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-image text-center">
                <img
                  src="/images/home-7-8-9/progress/progress.png"
                  alt="app-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new-app-progress-shape">
          <img src="/images/home-7-8-9/progress/shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AppProgress;
