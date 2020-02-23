import React, { Component } from "react";
import Ebook from "./components/Ebook";
import "./styles/global.scss";

class App extends Component {
  componentDidMount() {
    const html = document.querySelector("html");
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > 50 ? 50 : fontSize;
    html.style.fontSize = fontSize + "px";
  }

  render() {
    return (
      <div className="app">
        <Ebook />
      </div>
    );
  }
}

export default App;
