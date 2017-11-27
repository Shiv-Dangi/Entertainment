import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

class MovieDetail extends Component {
	// constructor(props) {
 //    super(props);
 //  }

  render() {
    let movieInfo = this.props.data;
    return (
      <Col xs={12} sm={6} md={4} className="movie-box">
        <a href={movieInfo.homepage} target="_blank">
          <div className="movie-detail">
            <Image className="movie-img" src="http://www.storypick.com/wp-content/uploads/2016/08/xmenapocalypseimax.jpg" responsive />
            <div className="movie-info">
              <Row className="movie-title">{movieInfo.title}</Row>
              <Row>Release: {movieInfo.release_date}</Row>
              <Row>Vote: {movieInfo.vote_count}, Rating: {movieInfo.vote_average}</Row>
            </div>
          </div>
        </a>
      </Col>
    );
  }
}

export default MovieDetail