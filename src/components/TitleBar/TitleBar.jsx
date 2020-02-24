import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./TitleBar.module.scss";
import "../../assets/icon/style.css";

class TitleBar extends Component {
  render() {
    return (
      <div className={this.props.isShowMenu ? styles["bar-wrapper"] : "hide"}>
        <div className={styles["bar-left"]}>
          <span className="icon-back icon" style={{ fontSize: "24px" }}></span>
        </div>
        <div className={styles["bar-right"]}>
          <div className={styles["icon-wrapper"]}>
            <span className="icon-cart icon"></span>
          </div>
          <div className={styles["icon-wrapper"]}>
            <span className="icon-person icon"></span>
          </div>
          <div className={styles["icon-wrapper"]}>
            <span className="icon-more icon"></span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShowMenu: state.showMenu.isShowMenu
});

export default connect(mapStateToProps, null)(TitleBar);
