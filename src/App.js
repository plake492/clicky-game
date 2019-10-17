import React, { Component } from "react";
import Images from "./compnents/Images";
import mountains from "./mountains.json";
import Navabr from "./compnents/Navbar";
import "./app.css";

class App extends Component {
  state = {
    mountains
  };

  handleImageClick = (id, beenClicked) => {
    // const mountains = this.state.mountains.filter(
    //   mountain => mountain.beenClicked !== beenClicked
    // );
    // this.setState({ mountains });
    console.log(`${id} : ${beenClicked}`);
  };

  render() {
    return (
      <div>
        <Navabr />
        <div className="imgBox">
          {this.state.mountains.map(mountain => (
            <Images
              beenClicked={mountain.beenClicked}
              id={mountain.id}
              image={mountain.image}
              handleImageClick={this.handleImageClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
