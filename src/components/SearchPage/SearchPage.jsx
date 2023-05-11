import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../slices/fetchDataSlice';

import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="search-page">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="searchQuery"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <Link to="/results">
          <button
            type="button"
            className="btn-search"
            onClick={() => {
              fetchData(dispatch, searchQuery);
            }}
          >
            Buscar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchPage;
