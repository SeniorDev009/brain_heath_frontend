import React from 'react';
import { useRouter } from 'next/router';

const SearchWidget = ({ word }) => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = React.useState(word);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchKeyword && router.push(`/posts/search-results?word=${searchKeyword}`);
  };
  return (
    <div className="col-lg-12 col-md-6 mb-4 widget-area">
      <div className="widget widget_search">
        <form className="search-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="search"
              className="search-field"
              placeholder="Nutrition and Dementia"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            <i className="ri-search-2-line"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWidget;
