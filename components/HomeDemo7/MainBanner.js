import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
  },
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="new-app-main-banner-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-main-banner-content">
                <div className="content">
                  <div className="name-big-text">Texap</div>
                  {/* <span className="sub-title">
                    #Get Your 14 Days Free Trial
                  </span> */}
                  <h1>Lorem Ipsum</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tincidunt eifend odio viverra diam aliquet donec again.
                  </p>

                  <div className="app-btn-box">
                    <a href="/" className="playstore-btn">
                      <img src="/images/play-store.png" alt="image" />
                      Contact us
                    </a>
                  </div>

                  <div className="content-shape">
                    <img
                      src="/images/home-7-8-9/banner/content-shape.png"
                      alt="image"
                    />
                  </div>
                </div>

                {/* Trusted Slides */}
                <div className="new-app-trusted-by">
                  <div className="row align-items-center">
                    {/* <div className="col-xl-2 col-lg-3 col-md-12">
                      <span className="title">Trusted by:</span>
                    </div> */}
                    <div className="col-md-12">
                      {display ? (
                        <OwlCarousel
                          className="new-app-trusted-by-slides owl-carousel owl-theme"
                          {...options}
                        >
                          <div className="features-area pt-100 pb-75">
                            <div className="features-card">
                              <div className="icon">
                                <i className="ri-smartphone-line"></i>
                                <div className="number">1</div>
                              </div>
                              <h3>Lorem ipsum</h3>
                            </div>
                          </div>
                        </OwlCarousel>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                duration={2}
                animateOnce={true}
                initiallyVisible={true}
              >
                <div className="new-app-main-banner-image">
                  <img
                    src="/images/home-7-8-9/banner/banner-1.png"
                    alt="image"
                  />

                  <div className="wrap-shape-1">
                    <img
                      src="/images/home-7-8-9/banner/shape-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="wrap-shape-2">
                    <img
                      src="/images/home-7-8-9/banner/shape-2.png"
                      alt="image"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="new-app-banner-bg-shape">
          <img src="/images/home-7-8-9/banner/banner-shape.png" alt="image" />
        </div>
        <div className="new-app-banner-strock-shape">
          <img src="/images/home-7-8-9/banner/strock.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
