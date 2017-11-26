import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import MovieDetail from './MovieDetail'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getMovieData} from '../actions/Home'

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.getMovieData()
  }

  // componentWillReceiveProps(nextProps,nextState) {
  //   console.log(nextProps);
  // }

  render() {
    return (
      <div className="home-page row">
        <Grid>
          <Row className="movie-list">
            { typeof this.props.movieData !== 'undefined' ?
              <div>
                <MovieDetail data={this.props.movieData}/>
                <MovieDetail data={this.props.movieData}/>
                <MovieDetail data={this.props.movieData}/>
              </div>
              : ''
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