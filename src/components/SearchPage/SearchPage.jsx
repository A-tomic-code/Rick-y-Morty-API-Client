import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../slices/fetchDataSlice';

import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className="search-page">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(dispatch, searchQuery);
          navigate('/results')
        }}
      >
        <input
          type="text"
          id="searchQuery"
          onChange={(event) => setSearchQuery(event.target.value)}
        />

          <button
            type="button"
            className="btn-search"
          >
            Buscar
          </button>
      </form>
    </div>
  );
};

export default SearchPage;
