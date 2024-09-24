import { Component } from 'react'

import Header from './components/Header'
import Greeting from './components/Greeting'

class GreetingApp extends Component {
    render() {
        return (
            <section className='greeting-app'>
                <h1>Class Component</h1>
                <Header username="John Doe" />
                <Greeting />
            </section>
        )
    }
}

export default GreetingApp