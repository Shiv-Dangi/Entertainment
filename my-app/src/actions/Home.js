import {movieData} from './movieData'

export function getMovieData() {
  return {
    type: 'MOVIE_DATA',
    data: movieData
  };
}

export function filterMovieData(search_key) {
  let result = []
  if (search_key !== '') {
    search_key = search_key.toLowerCase()
    movieData.forEach( function (movie) {
      let movieTitle = movie.title
      if (typeof movieTitle === 'string') {
        movieTitle = movieTitle.toLowerCase()
        if (movieTitle.indexOf(search_key) !== -1) {
          result.push(movie)
        }
      } else {
        let movieKeywords = JSON.parse(movie.keywords)
        movieKeywords.forEach(function (keyword) {
          keyword = (keyword.name).toLowerCase()
          if(keyword.indexOf(search_key) !== -1){
            result.push(movie)
          } 
        })
      }
    })
  } else {
    result = movieData.slice(0,24)
  }
  return {
    type: 'UPDATE_RESULT',
    data: result
  }
}