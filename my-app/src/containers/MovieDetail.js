import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

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
  }

  getImageURL() {
    return (imageList[Math.floor(Math.random() * imageList.length)])
  }

  render() {
    let movieInfo = this.props.data;
    return (
      <Col xs={12} sm={6} md={4} className="movie-box">
        <div className="movie-detail">
          <Image className="movie-img" src={this.getImageURL()} responsive />
          <div className="movie-info">
            <Row className="movie-title">{movieInfo.title}</Row>
            <Row className="release_date">Release: {movieInfo.release_date}</Row>
            {/*<Row>Vote: {movieInfo.vote_count}, Rating: {movieInfo.vote_average}</Row>*/}
          </div>
        </div>
      </Col>
    );
  }
}

export default MovieDetail