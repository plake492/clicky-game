import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header--text">
          <h2>
            Click the images below to score points, but don't click them more
            than once!
          </h2>
        </div>
      </header>
    );
  }
}

export default Header;
