import React from 'react'
import { useRouter } from 'next/router'
const WidgetSearch = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    searchKeyword && router.push(`search-results?word=${searchKeyword}`)
  }

  return (
    <div className="axil-single-widget widget widget_search mb--30">
      <h5 className="widget-title">Search</h5>
      <form onSubmit={handleSubmit} >
        <div className="axil-search form-group">
          <button type="submit" className="search-button" onClick={handleSubmit}>
            <i className="fal fa-search" />
          </button>
          <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchKeyword(e.target.value)} />
        </div>
      </form>
    </div >
  );
};

export default WidgetSearch;
