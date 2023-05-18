import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../slices/fetchDataSlice';
import './SearchForm.css';
import { useSearchFilters } from '../../hooks/useSearchFilters';
import Logo from '../../assets/logo.svg';

export const Filters = () => {
  const { searchFilters, handleFilterChange, categories } = useSearchFilters();

  return (
    <div className="filters">
      {Object.entries(categories).map((category) => {
        return (
          <select
            id={category[0]}
            key={category[0]}
            onChange={handleFilterChange}
            value={searchFilters[category[0]]}
          >
            {/* placeholder */}

            <option value="" defaultValue>
              ---
            </option>

            {/* listar las categorias */}

            {category[1].map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
};

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
          <button className="btn-search">Buscar</button>
        </div>

        <Filters />
      </form>
    </section>
  );
};
export default SearchForm;
