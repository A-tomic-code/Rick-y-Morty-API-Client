import { createSlice } from '@reduxjs/toolkit';

const fetchDataSlice = createSlice({
  name: 'searchFilters',
  initialState: {
    gender: false,
    species: false,
    status: false,
    filtered: []
  },
  reducers: {
    setSearchFilters: (state, action) => {
      state = action.payload;
    },
    setSearchFiltersStatus: (state, action) => {
      state.status = action.payload;
    },
    setSearchFiltersSpecies: (state, action) => {
      state.species = action.payload;
    },
    setSearchFiltersGender: (state, action) => {
      state.gender = action.payload;
    },
    setFiltered: (state, action) => {
      state.filtered = action.payload
    }
  },
});

export const {
  setSearchFilters,
  setSearchFiltersGender,
  setSearchFiltersSpecies,
  setSearchFiltersStatus,
  setFiltered,
} = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
