import React, { Component } from "react";
import Images from "./compnents/Images";
import mountains from "./mountains.json";
import Navabr from "./compnents/Navbar";
import Header from "./compnents/Header";
import "./app.css";

let counter = 0;

class App extends Component {
  state = {
    mountains,
    click: 0,
    message: ""
  };

  handleImageClick = id => {
    const index = this.state.mountains.findIndex(obj => obj.id === id);

    if (this.state.mountains[index].beenClicked === true) {
      this.setState({ message: "You already clicked that one!" });
      counter = 0;
      this.setState({ click: counter });
      // for (let i = 0; i < this.state.mountains.length; i++) {
      //   let newState = Object.assign({}, this.state);
      //   newState.mountains[i].beenClicked = false;
      //   this.setState(newState);
      // }
      const clickState = this.state.mountains.forEach(element => {
        element.beenClicked = false;
      });
      console.log(clickState);

      return;
    } else {
      let newState = Object.assign({}, this.state);
      newState.mountains[index].beenClicked = !newState.mountains[index]
        .beenClicked;
      this.setState(newState);
      this.setState({ message: "You guessed correctly!" });
      counter++;
      this.setState({ click: counter });
    }
  };

  render() {
    return (
      <div>
        <Navabr message={this.state.message} click={this.state.click} />
        <Header />
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
