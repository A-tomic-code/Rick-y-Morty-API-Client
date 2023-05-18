import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchFiltersGender,
  setSearchFiltersStatus,
  setSearchFiltersSpecies,
} from '../slices/searchFiltersSlice';

const GENDERS = ['Male', 'Female', 'Genderless', 'unknown'];
const STATUSES = ['Alive', 'Dead', 'unknown'];
const SPECIES = ['Human', 'Alien', 'unknown', 'Humanoid', 'Poopybutthole'];

export const useSearchFilters = () => {
  const dispatch = useDispatch();
  const searchFilters = useSelector((state) => state.searchFilters);
  const results = useSelector((state) => state.fetchData.data.results);
  const handleFilterChange = (e) => {
    const funcMap = {
      gender: setSearchFiltersGender,
      status: setSearchFiltersStatus,
      species: setSearchFiltersSpecies,
    };

    const value = e.target.value || false;
    dispatch(funcMap[e.target.id](value));
  };
  const filterData = () => {
    const sf = searchFilters;
    const filteredData = [];

    results.forEach((result) => {
      const filters = [];

      if (sf.gender) {
        filters.push(sf.gender === result.gender);
      }
      if (sf.status) {
        filters.push(sf.status === result.status);
      }
      if (sf.species) {
        filters.push(sf.species === result.species);
      }
      if (filters.every((item) => item)) {
        filteredData.push(result);
      }
    });

    return filteredData;
  };

  return {
    searchFilters,
    filterData,
    handleFilterChange,
    categories: { gender: GENDERS, status: STATUSES, species: SPECIES },
  };
};
