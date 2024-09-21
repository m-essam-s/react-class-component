import './App.css'

import { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Greeting from './components/Greeting'
class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <h1>{this.props.type} Component</h1>
        <Header username="John Doe" />   
        <Greeting />
      </div>
    )
  }
}

App.propTypes = {
  type: PropTypes.string.isRequired,
}

export default App
