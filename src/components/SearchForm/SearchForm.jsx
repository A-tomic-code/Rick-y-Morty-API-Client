import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../slices/fetchDataSlice';
import { SearchFilters } from '../SearchFilters/SearchFilters';
import {motion} from 'framer-motion'
import './SearchForm.css';
import Logo from '../../assets/logo.svg';



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
        <div className="search-input">
          <input placeholder="Rick, Morty, Beth.." onChange={handleChange} />
          <motion.button 
            className="btn-search"
            whileTap={{scale: .8}}
          >
            Buscar
          </motion.button>
        </div>

        <SearchFilters />
      </form>
    </section>
  );
};
export default SearchForm;
