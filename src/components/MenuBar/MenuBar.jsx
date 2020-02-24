import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";

import FontSetting from "../FontSetting/FontSetting";
import ThemeSetting from "../ThemeSetting/ThemeSetting";

import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <div className={this.props.isShowMenu ? styles["bar-wrapper"] : "hide"}>
        <div className={styles["menu-item"]}>
          <span className="icon-menu icon"></span>
        </div>
        <div className={styles["menu-item"]}>
          <span
            className="icon-bright icon"
            onClick={this.props.showThemeSetting}
          ></span>
        </div>
        <div className={styles["menu-item"]}>
          <span className="icon-progress icon"></span>
        </div>
        <div
          className={styles["menu-item"]}
          onClick={this.props.showFontSetting}
        >
          <span className="icon">A</span>
        </div>
        <FontSetting />
        <ThemeSetting />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShowMenu: state.showMenu.isShowMenu
});

const mapDispatchToProps = dispatch => {
  return {
    showFontSetting() {
      const action = actionCreators.showFontSetting();
      dispatch(action);
    },
    showThemeSetting() {
      const action = actionCreators.showThemeSetting();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
