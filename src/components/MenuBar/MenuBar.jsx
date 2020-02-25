import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";

import FontSetting from "../FontSetting/FontSetting";
import ThemeSetting from "../ThemeSetting/ThemeSetting";
import ProgressSetting from "../ProgressSetting/ProgressSetting";

import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <div className={this.props.isShowMenu ? styles["bar-wrapper"] : "hide"}>
        <div className={styles["menu-item"]}>
          <span className="icon-menu icon"></span>
        </div>
        <div
          className={styles["menu-item"]}
          onClick={this.props.showThemeSetting}
        >
          <span className="icon-bright icon"></span>
        </div>
        <div
          className={styles["menu-item"]}
          onClick={this.props.showProgressSetting}
        >
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
        <ProgressSetting />
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
    },
    showProgressSetting() {
      const action = actionCreators.showProgessSetting();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
