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
      let movieKeywords = JSON.parse(movie.keywords)
      movieKeywords.forEach(function (keyword) {
        keyword = (keyword.name).toLowerCase()
        if(keyword.indexOf(search_key) !== -1){
          result.push(movie)
        } 
      })
    })
  } else {
    result = movieData.slice(0,12)
  }
  if (result.length > 20){
    result = result.slice(0, 20)
  }
  return {
    type: 'UPDATE_RESULT',
    data: result
  }
}