import './App.css'

import { Component } from 'react'
import GreetingApp from './App/Greeting/GreetingApp'
import StateApp from './App/State/StateApp'
import CounterApp from './App/Counter/CounterApp'

class App extends Component {
  render() {
    return (
      <main>
        <GreetingApp/>
        <StateApp/>
        <CounterApp/>
      </main>
    )
  }
}

export default App
