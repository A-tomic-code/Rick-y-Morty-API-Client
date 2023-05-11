import './SearchPage.css'

const SearchPage = () => {
  return (
    <div className='search-page'>
      <form className="search-form">

      <input type="text" id="searchQuery"/>
      <button type="button" className="btn-search">BUSCAR</button>

      </form>
    </div>
  )
}

export default SearchPage