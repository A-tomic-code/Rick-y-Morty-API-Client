// import {setData } from '../slices/fetchDataSlice'
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'
import {setFiltered} from '../slices/searchFiltersSlice'

const GENDERS = ['Male', 'Female', 'Genderless', 'unknown'];
const STATUSES = ['Alive', 'Dead', 'unknown'];
const SPECIES = ['Human', 'Alien', 'unknown', 'Humanoid', 'Poopybutthole'];

export const useSearchFilters = () => {

  const [searchFilters, setSearchFilters] = useState({
    gender: false,
    species: false,
    status: false,
  });

  const results = useSelector((state) => state.fetchData.data.results);
  const dispatch = useDispatch()
  
  const handleFilterChange = (e) => {

    //actualizo el estado local

    const val = e.target.value || false
    
    const funcMap = {
      gender: (val) => {return {...searchFilters, gender : val}},
      species: (val) => {return {...searchFilters, species : val}},
      status: (val) => {return {...searchFilters, status : val}}
    };

    const newFilters = funcMap[e.target.id](val)
    setSearchFilters(newFilters)

    // Actualizo el estado general de la app 

    if(newFilters.gender || newFilters.species || newFilters.status){
      const filtered = filterData(results, newFilters)
      dispatch(setFiltered(filtered))
    }else {
      dispatch(setFiltered(results))
    }
    
  };
  
  return {
    handleFilterChange,
    categories: { gender: GENDERS, status: STATUSES, species: SPECIES },
  };
};


const filterData = (results, sf) => {

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