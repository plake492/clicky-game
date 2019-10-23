import React, { Component } from "react";
import Images from "./compnents/Images";
import mountains from "./mountains.json";
import Navabr from "./compnents/Navbar";
import Header from "./compnents/Header";
import "./app.css";

let counter = 0;
let highCount = 0;
let guessedRight = false;
let guessedWrong = false; 

class App extends Component {
  state = {
    mountains,
    click: 0,
    message: "",
    highScore: 0
  };

  handleImageClick = id => {
    const clicked = this.state.mountains.filter(obj => obj.id === id);

    if (clicked[0].beenClicked === true) {
      this.setState({ message: "You already clicked that one!" });
      counter = 0;
      this.setState({ click: counter });
      mountains.forEach(mountain => {
        mountain.beenClicked = false;
      });
    } else {
      clicked[0].beenClicked = true;
      this.setState({ mountains });
      mountains.sort(() => Math.random() - 0.5);
      this.setState({ message: "You guessed correctly!" });
      counter++;
      this.setState({ click: counter });
      if (this.state.highScore <= this.state.click) {
        highCount++;
        this.setState({ highScore: highCount });
      }

    }
  };

  render() {
    return (
      <div>
        <Navabr
          message={this.state.message}
          click={this.state.click}
          highScore={this.state.highScore}
        />
        <Header />
        <div className="imgBox">
          {this.state.mountains.map(mountain => (
            <Images
              beenClicked={mountain.beenClicked}
              id={mountain.id}
              image={mountain.image}
              handleImageClick={this.handleImageClick}
              guessedRight
              guessedWrong
            />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default App;
