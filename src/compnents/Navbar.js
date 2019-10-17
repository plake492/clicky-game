import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__title">
          <h2>Clicky Game</h2>
        </div>
        <div className="nav__title">
          <h2>You Guessed Correctly!</h2>
        </div>
        <div className="nav__title">
          <h2>Score: 0 | Top Score: 0</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
