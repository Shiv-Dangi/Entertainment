import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button, Navbar, FormGroup, FormControl } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/about-us">About</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header