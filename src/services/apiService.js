const ENDPOINTS = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
};

export const getCharacters = async (searchQuery) => {

  try {
    const response = await fetch(
      `${ENDPOINTS.characters}/?name=${searchQuery}`
    );
    
    const data = await response.json();
    return data
    
  } catch (error) {
    console.log(error);
    return []
  }
};