import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import MovieDetail from './MovieDetail'
import Pagination from './Pagination'
import {getMovieData} from '../actions/Home'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.movieData !== 'undefined') {
      this.setState({
        result: nextProps.movieData.result
      })
    }
  }

  componentWillMount() {
    this.props.getMovieData()
  }

  render() {
    let pageOfItems = this.state.pageOfItems,
    result = this.state.result
    return (
      <div className="home-page row">
        <Grid>
          <Row className="movie-list">
            { pageOfItems.length ?
              pageOfItems.map((movieInfo, index) =>
                <MovieDetail key={index} data={movieInfo}/>
              )
              : 
              <div>No Result Found</div>
            }
            {result.length && <Pagination items={this.state.result} onChangePage={this.onChangePage} />}
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