import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import MovieDetail from './MovieDetail'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getMovieData} from '../actions/Home'

class Home extends Component {

  componentWillMount() {
    this.props.getMovieData()
  }

  render() {
    let result = this.props.movieData.result;
    return (
      <div className="home-page row">
        <Grid>
          <Row className="movie-list">
            { typeof result !== 'undefined' && result.length ?
              result.map((movieInfo, index) =>
                <MovieDetail key={index} data={movieInfo}/>
              )
              : 
              <div>No Result Found</div>
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData:state.movieData,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {getMovieData}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)