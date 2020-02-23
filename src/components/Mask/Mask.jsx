import React, { Component } from "react";
import "./Mask.scss";

class Mask extends Component {
  constructor(props) {
    super(props);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  handleLeft = () => {
    this.props.goPrevPage();
  };

  handleRight = () => {
    this.props.goNextPage();
  };

  render() {
    return (
      <div className="ebook-mask">
        <div className="left" onClick={this.handleLeft}></div>
        <div className="center"></div>
        <div className="right" onClick={this.handleRight}></div>
      </div>
    );
  }
}

export default Mask;
