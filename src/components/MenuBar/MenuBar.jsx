import React, { Component } from "react";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <div className={styles["bar-wrapper"]}>
        <div className={styles["menu-item"]}>
          <span className="icon-menu icon"></span>
        </div>
        <div className={styles["menu-item"]}>
          <span className="icon-bright icon"></span>
        </div>
        <div className={styles["menu-item"]}>
          <span className="icon-progress icon"></span>
        </div>
        <div className={styles["menu-item"]}>
          <span className="icon">A</span>
        </div>
      </div>
    );
  }
}

export default MenuBar;
