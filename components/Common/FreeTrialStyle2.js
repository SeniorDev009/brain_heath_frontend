import React from 'react';
import { useRouter } from 'next/router';

const FreeTrialStyle2 = ({ heading = '', word }) => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = React.useState(word);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchKeyword && router.push(`/posts/search-results?word=${searchKeyword}`);
  };
  return (
    <>
      <div className="free-trial-area ptb-100">
        <div className="container">
          <div className="free-trial-content bg-color">
            <h2>{heading}</h2>
            <br />
            <span style={{ color: 'white', marginTop: '10rem' }}>
              What would you like to know more about?
            </span>

            <form className="free-trial-form" onSubmit={handleSubmit}>
              <input
                type="search"
                className="input-newsletter"
                placeholder="Nutrition and Dementia"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="default-btn"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>

            {/* Shape Images */}
            <div className="shape8">
              <img src="/images/shape/shape7.png" alt="shape" />
            </div>
            <div className="shape9">
              <img src="/images/shape/shape8.png" alt="shape" />
            </div>

            {/* Animation lines */}
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialStyle2;
