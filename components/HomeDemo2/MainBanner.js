import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row align-items-center m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="banner-content">
                <span className="sub-title">Start you free trial</span>
                <h1>Lorem Ipsum sit Amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  tincidunt eifend odio viverra diam aliquet donec again.
                </p>

                <Link href="/sign-in">
                  <a className="default-btn">Start Free Trial</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <ScrollAnimation
                animateIn="fadeInDown"
                duration={2}
                animateOnce={true}
                initiallyVisible={true}
              >
                <div className="banner-image">
                  <img src="/images/banner/banner-app2.png" alt="image" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape3">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape13">
          <img src="/images/shape/shape15.png" alt="shape" />
        </div>
        <div className="banner-shape6">
          <img src="/images/shape/shape16.png" alt="image" />
        </div>
        <div className="banner-shape7">
          <img src="/images/shape/shape11.png" alt="image" />
        </div>
        <div className="banner-shape8">
          <img src="/images/shape/shape11.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
