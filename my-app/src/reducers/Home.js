const initialState = [];

export function movieData(state=initialState, action) {
  switch (action.type) {
	  case 'MOVIE_DATA':
      let popularMovies = action.data.slice(0, 12)
	    return { ...state, allMovies: action.data, popularMovies: popularMovies, result: popularMovies };
    case 'UPDATE_RESULT':
      return {...state, result: action.data}
	  default:
	    return state;
  }
};