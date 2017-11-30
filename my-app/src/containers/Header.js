import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, Navbar, FormGroup, FormControl } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {filterMovieData} from '../actions/Home'

class Header extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.resetHome = this.resetHome.bind(this)
    this.state = {
      search_key: ''
    }
  }

  handleChange(e) {
    this.setState({ search_key: e.target.value })
  }

  submit() {
    this.props.filterMovieData(this.state.search_key)
    // e.preventDefault()
  }

  resetHome() {
    this.setState({ search_key: '' }) 
    this.props.filterMovieData(this.state.search_key)
  }

  render() {
    return (
      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" onClick={this.resetHome}>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/about-us">About</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form onSubmit={this.submit()} pullLeft>
              <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Search" 
                  value={this.state.search_key}
                  onChange={this.handleChange}
                />
              </FormGroup>
              {/*<Button type="submit" onClick={this.submit}>Submit</Button>*/}
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {filterMovieData}, dispatch
)

export default connect(null, mapDispatchToProps)(Header)