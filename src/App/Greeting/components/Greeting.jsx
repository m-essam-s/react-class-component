import { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you</h1>
        )
    }
}

Greeting.propTypes = {
    username: PropTypes.string
}

export default Greeting;
