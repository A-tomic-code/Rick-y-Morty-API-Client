import { configureStore } from '@reduxjs/toolkit';
import fetchDataSlice from './slices/fetchDataSlice';

export default configureStore({
  reducer: { 
    fetchData: fetchDataSlice 
  }
});
