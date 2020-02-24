import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";

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
        <div
          className={styles.center}
          onClick={() => this.props.displayMenu(this.props.isShowMenu)}
        ></div>
        <div className={styles.right} onClick={this.handleRight}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShowMenu: state.showMenu.isShowMenu
});

const mapDispatchToProps = dispatch => {
  return {
    displayMenu(isShowMenu) {
      let action = isShowMenu
        ? actionCreators.hideMenuActionCreator()
        : actionCreators.showMenuActionCreator();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mask);
