import React, { Component } from 'react'
import { Col, Image } from 'react-bootstrap'

class MovieDetail extends Component {
	// constructor(props) {
 //    super(props);
 //  }

  render() {
    return (
      <Col xs={12} md={4} className="movie-detail">
        <Image src="https://i.pinimg.com/736x/cb/f4/fb/cbf4fb9e6efe74aea6fcf079eaddd339--sirius-black-rupert-grint.jpg" responsive />
        MovieDetail
      </Col>
    );
  }
}

export default MovieDetail