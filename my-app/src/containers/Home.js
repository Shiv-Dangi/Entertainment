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
    this.onChangePage = this.onChangePage.bind(this)
    this.showResultText = this.showResultText.bind(this)
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

  showResultText() {
    let searchKey = this.props.movieData.searchKey
    if(searchKey !== '') {
      return (<div>Showing results for <span>{searchKey}</span></div>)
    } else {
      return ('Popular Movies')
    }
  }

  render() {
    let pageOfItems = this.state.pageOfItems,
    result = this.state.result,
    searchKey = this.props.movieData.searchKey
    return (
      <div className="home-page row">
        <Grid>
          {typeof searchKey !== 'undefined' &&
              <Row className="search-breadcrumbs">{this.showResultText()}</Row>
          }
          <Row className="movie-list">
            { result.length ?
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