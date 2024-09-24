
import { Component } from 'react'

class CounterApp extends Component {
    state = {
        count: 0
    }

    add = () => {
        this.setState(prevCount => {
            return {
                count: prevCount.count + 1
            }
        })
    }

    subtract = () => {
        this.setState(prevCount => {
            return {
                count: prevCount.count - 1
            }
        })
    }

    render() {
        return (
            <section className="counter-app">
                <button className="counter--minus" onClick={this.subtract}>-</button>
                <div className="counter--count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </section>
        )
    }
}

export default CounterApp