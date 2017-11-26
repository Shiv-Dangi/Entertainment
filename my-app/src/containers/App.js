import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import "../assets/style/App.css"


const App = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App