import './App.css'

import { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <h1>
        {this.props.type} Component
      </h1>
    )
  }
}

App.propTypes = {
  type: PropTypes.string.isRequired,
}

export default App
