import React from 'react';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <div className="profile-authentication-area">
        <div className="logo">
          <Link href="/">
            <a className="d-inline-block">
              <img src="/images/black-logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <button type="submit">Sign Up</button>
                  <span className="dont-account">
                    Already have an account?{' '}
                    <Link href="/sign-in">
                      <a>Sign In Now!</a>
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <ul className="social-links d-flex align-items-center justify-content-center">
          <li>
            <span>Follow Us On:</span>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="twitter" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="linkedin"
              target="_blank"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_blank"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default SignUp;
