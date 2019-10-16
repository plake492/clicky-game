import React, { Component } from "react";
import Images from "./compnents/Images";
import mountains from "./mountains.json";
import Navabr from "./compnents/Navbar";
import "./app.css";

class App extends Component {
  state = {
    mountains
  };

  render() {
    return (
      <div>
        <Navabr />
        <div className="imgBox">
          {this.state.mountains.map(mountain => (
            <Images image={mountain.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
