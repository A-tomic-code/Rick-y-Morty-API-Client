import { createSlice } from '@reduxjs/toolkit';

const fethDataSlice = createSlice({
  name: 'fethData',
  initialState: {
    data: {
      info: {},
      error: false,
      results: [],
    },
    isFetching: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setResults: (state, action) => { console.log(action.type, action.payload); state.data.results = action.payload },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});


export const { setResults, setData, setIsFetching } = fethDataSlice.actions;
export default fethDataSlice.reducer;
