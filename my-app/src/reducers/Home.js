const initialState = [];

export function movieData(state=initialState, action) {
  switch (action.type) {
	  case 'MOVIE_DATA':
      let popularMovies = action.data.slice(0, 24)
	    return { ...state, allMovies: action.data, popularMovies: popularMovies, result: popularMovies, searchKey: '' };
    case 'UPDATE_RESULT':
      return {...state, result: action.data.result, searchKey: action.data.searchKey}
	  default:
	    return state;
  }
};