var movieData = [
	{
		movie1: 'movie1 detail',
		movie2: 'movie2 detail'
	}
]

export function getMovieData() {
  return {
    type: 'MOVIE_DATA',
    data: movieData
  };
}