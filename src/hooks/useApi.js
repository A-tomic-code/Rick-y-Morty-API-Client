
import { useDispatch } from 'react-redux';
import{ getCharacters } from '../services/apiService'
import { setData, setIsFetching } from '../slices/fetchDataSlice';
import {setFiltered} from '../slices/searchFiltersSlice'



export const useApi = () => {

  const dispatch = useDispatch()

  const searchCharacters = (query) => {

    dispatch(setIsFetching(true));
    
    getCharacters(query)
    .then(results => {
      const toSave = {
      info: results.info ?? {},
      error: results.error ?? false,
      results: results.results ?? [],
    };
    dispatch(setData(toSave))
    dispatch(setFiltered(toSave.results))
    })
    .catch(e => console.error(e, e.message))
    .finally(() => dispatch(setIsFetching(false)))

  }

  return {searchCharacters}
}