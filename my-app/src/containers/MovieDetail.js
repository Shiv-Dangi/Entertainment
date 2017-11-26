import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

class MovieDetail extends Component {
	// constructor(props) {
 //    super(props);
 //  }

  render() {
    let movieInfo = this.props.data;
    return (
      <Col xs={12} md={4} className="movie-box">
        <a href={movieInfo.homepage} target="_blank">
          <div className="movie-detail">
            <Image className="movie-img" src="https://i.pinimg.com/736x/cb/f4/fb/cbf4fb9e6efe74aea6fcf079eaddd339--sirius-black-rupert-grint.jpg" responsive />
            <div className="movie-info">
              <Row>Movie Title: {movieInfo.title}</Row>
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