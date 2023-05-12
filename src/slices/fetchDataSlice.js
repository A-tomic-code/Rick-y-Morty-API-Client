import { createSlice } from '@reduxjs/toolkit';

const endPoints =  {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

const fethDataSlice = createSlice({
  name: 'fethData',
  initialState: {
    data: {},
    isFetching: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    }
  }
})


export const fetchData = async (dispatch, searchQuery) => {
  dispatch(setIsFetching(true));
  
  console.log(searchQuery);
  
  try{
    const response = await fetch(`${endPoints.characters}/?name=${searchQuery}`);
    const data = await response.json()
    dispatch(setData(data));
  } catch (error){
    console.log(error);
  }

  dispatch(setIsFetching(false))
}

export const { setData, setIsFetching } = fethDataSlice.actions;
export default fethDataSlice.reducer;