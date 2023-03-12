import React from 'react';
import Link from 'next/link';
const Features = () => {
  return (
    <>
      <div className="features-area pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box" style={{ cursor: 'pointer' }}>
                {/* <div className="icon">
                  <i className="ri-smartphone-line"></i>
                </div> */}
                <Link href={`/category/wellness-solutions`}>
                  <h3>Wellness Soultions</h3>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box" style={{ cursor: 'pointer' }}>
                {/* <div className="icon bg2">
                  <i className="ri-award-line"></i>
                </div> */}
                <Link href={`/category/fda-approved-drugs`}>
                  <h3>FDA Approved Drugs</h3>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box" style={{ cursor: 'pointer' }}>
                {/* <div className="icon bg3">
                  <i className="ri-fingerprint-line"></i>
                </div> */}
                <Link href={`/category/clinical-trials`}>
                  <h3>Clinical Trials</h3>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6">
              <div className="features-box" style={{ cursor: 'pointer' }}>
                {/* <div className="icon bg4">
										<i className="ri-vip-diamond-line"></i>
									</div> */}
                <Link href={`/category/darmiverse`}>
                  <h3>DarmiVerse(TM)</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
