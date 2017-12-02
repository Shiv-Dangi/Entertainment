import React, { Component } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'

var imageList = [
  'https://yourfamilyexpert.com/wp-content/uploads/2011/12/the-adventure-of-tin-tin-movie-700x400.jpg',
  'http://www.reelmama.com/wp-content/uploads/2017/11/Justice-League-2017-Poster-You-Can-t-Save-the-World-Alone-justice-league-movie-40583604-1500-500-700x400.jpg',
  'https://yourfamilyexpert.com/wp-content/uploads/2011/12/sherlock-holmes-700x400.jpg',
  'https://yourfamilyexpert.com/wp-content/uploads/2008/06/2008_-_The_Incredible_Hulk_Movie_Poster-e1495572035351-700x400.jpg',
  'https://yourfamilyexpert.com/wp-content/uploads/2011/05/pirates-on-stranger-tides-700x400.jpg',
  'http://www.storypick.com/wp-content/uploads/2016/08/xmenapocalypseimax.jpg',
  'http://www.reelmama.com/wp-content/uploads/2015/10/Goosebumps-movie-poster-700x400.jpg'
]

class MovieDetail extends Component {
	constructor(props) {
    super(props);

    this.getImageURL = this.getImageURL.bind(this)
    this.getStringFromArray = this.getStringFromArray.bind(this)
    this.getMovieDuration = this.getMovieDuration.bind(this)
  }

  getImageURL() {
    return (imageList[Math.floor(Math.random() * imageList.length)])
  }

  getStringFromArray(arrayInfo) {
    let stringInfo = [],
    arrayList = JSON.parse(arrayInfo)
    arrayList.forEach(function(obj) {
      stringInfo.push(obj.name);
    });
    stringInfo = stringInfo.join(', ')
    return stringInfo
  }

  getMovieDuration() {
    let runtime = this.props.data.runtime,
    hour = Math.floor(runtime/60),
    minutes = runtime%60,
    formattedDuration = hour + ' hours ' + minutes + ' minutes'
    return formattedDuration 
  }

  render() {
    let movieInfo = this.props.data
    return (
      <Col xs={12} sm={6} md={4} className="movie-box">
        <div className="movie-detail">
          <div className="front card">
            <Image className="movie-img" src={this.getImageURL()} responsive />
            <div className="movie-info">
              <Row className="movie-title">{movieInfo.title}</Row>
              <Row className="release_date">Release: {movieInfo.release_date}</Row>
            </div>
          </div>

          <div className="back card">
            <div className="back-title">{movieInfo.title.toUpperCase()}</div>
            <Row><span className="detail-type">Release: </span>{movieInfo.release_date}</Row>
            <Row>
              <span className="detail-type">Genre: </span>
              {this.getStringFromArray(movieInfo.genres)}
            </Row>
            <Row>
              <span className="detail-type">Duration: </span>
              {this.getMovieDuration()}
            </Row>
            <Row>
              <span className="detail-type">Language: </span>
              {this.getStringFromArray(movieInfo.spoken_languages)}
            </Row>
            <Row>
              <span className="detail-type">Vote: </span> {movieInfo.vote_count}, 
              <span className="detail-type"> Rating: </span> {movieInfo.vote_average}
            </Row>
            <Row>
              <a href={movieInfo.homepage} target='_blank'><Button className="btn-danger link-btn">Detail</Button></a>
            </Row>
          </div>
        </div>
      </Col>
    );
  }
}

export default MovieDetail