import React from 'react'
import { useRouter } from 'next/router'
const WidgetSearch = ({ word }) => {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = React.useState(word)
  const handleSubmit = (e) => {
    e.preventDefault()
    searchKeyword && router.push(`/search-results?word=${searchKeyword}`)
  }

  return (
    <>
      {/* <div className="axil-single-widget widget widget_search mb--30">
      <h5 className="widget-title">Search</h5> */}
      <div className="d-flex p-2 gap-4">
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Nutrition and Dementia" className="rounded px-10 py-3" style={{ width: '60rem' }} onChange={(e) => setSearchKeyword(e.target.value)} />
        </form>
        <button type="submut" className="w-auto rounded bg-dark text-light px-10 py-3" style={{ padding: '35px' }} onClick={handleSubmit}>
          Search
        </button>
      </div>
      {/* {/* </div> */}
    </>
  );
};

export default WidgetSearch;
