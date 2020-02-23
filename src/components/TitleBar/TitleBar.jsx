import React, { Component } from "react";
import "./TitleBar.scss";
import "../../assets/icon/style.css";

class TitleBar extends Component {
  render() {
    return (
      <div className="bar-wrapper">
        <div className="bar-left">
          <span className="icon-back icon"></span>
        </div>
        <div className="bar-right">
          <div className="icon-wrapper">
            <span className="icon-cart icon"></span>
          </div>
          <div className="icon-wrapper">
            <span className="icon-person icon"></span>
          </div>
          <div className="icon-wrapper">
            <span className="icon-more icon"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
