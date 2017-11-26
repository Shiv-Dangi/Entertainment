const initialState = [];

export function movieData(state=initialState, action) {
  switch (action.type) {
	  case 'MOVIE_DATA':
	    return action.data;
	  default:
	    return state;
  }
};