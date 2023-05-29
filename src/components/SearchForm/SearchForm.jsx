import { useState } from 'react';
import { SearchFilters } from '../SearchFilters/SearchFilters';
import './SearchForm.css';
import Logo from '../../assets/logo.svg';
import { SearchButton } from '../SearchButton/SearchButton';
import { useApi } from '../../hooks/useApi';



const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const { searchCharacters } = useApi()
const handleChange = (event) => setSearchQuery(event.target.value);
 
   const handleSubmit = (event) => {
    event.preventDefault();
    searchCharacters(searchQuery)
    
  };


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
