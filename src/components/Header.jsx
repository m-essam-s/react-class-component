import { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome {this.props.username}!</p>
      </header>
    );
  }
}

Header.propTypes = {
  username: PropTypes.string.isRequired
};

export default Header;