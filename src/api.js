import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID c1zD46TiLUUMovw_bt0FK_ZyFg1g7OwNUijR_SpvDIM'
    },
    params: {
      query: term,
    }
  }) 

  return response.data.results
}

export default searchImages;