import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../slices/fetchDataSlice';
import { SearchFilters } from '../SearchFilters/SearchFilters';
import './SearchForm.css';
import Logo from '../../assets/logo.svg';
import { SearchButton } from '../SearchButton/SearchButton';



const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(dispatch, searchQuery);
  };

  const handleChange = (event) => setSearchQuery(event.target.value);

  return (
    <section className="form">
      <img src={Logo} alt="logo" className="logo" />

      <form className="search-form" onSubmit={handleSubmit}>
        <input  placeholder="Rick, Morty, Beth.." onChange={handleChange} />
        <SearchFilters />
        <SearchButton/>
      </form>
    </section>
  );
};
export default SearchForm;
