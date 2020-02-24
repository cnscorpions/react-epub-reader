import React, { Component } from "react";
import styles from "./Mask.module.scss";

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
      <div className={styles["ebook-mask"]}>
        <div className={styles.left} onClick={this.handleLeft}></div>
        <div className={styles.center}></div>
        <div className={styles.right} onClick={this.handleRight}></div>
      </div>
    );
  }
}

export default Mask;
