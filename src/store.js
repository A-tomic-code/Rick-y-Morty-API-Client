import { configureStore } from '@reduxjs/toolkit';
import fetchDataSlice from './slices/fetchDataSlice';
import searchFiltersSlice from './slices/searchFiltersSlice';

export default configureStore({
  reducer: {
    fetchData: fetchDataSlice,
    searchFilters: searchFiltersSlice,
  },
});
