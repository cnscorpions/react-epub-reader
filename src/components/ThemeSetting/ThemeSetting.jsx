import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";
import selectTheme from "../../utils/selectTheme";

import styles from "./ThemeSetting.module.scss";

class ThemeSetting extends Component {
  render() {
    const themeList = selectTheme("ALL");

    return (
      <div className={this.props.isShowThemeSetting ? null : "hide"}>
        <ThemeList themeList={themeList} parentProps={this.props} />
      </div>
    );
  }
}

function ThemeList(props) {
  const { themeList, parentProps } = props;
  const listItem = themeList.map((theme, index) => (
    <li className={styles.part} key={index}>
      <span
        className={styles.color}
        style={{ background: theme["background"] }}
        onClick={() => parentProps.changeTheme(theme["text"])}
      >
        {theme["text"]}
      </span>
    </li>
  ));
  return <ul className={styles.wrapper}>{listItem}</ul>;
}

const mapStateToProps = state => ({
  isShowThemeSetting: state.setTheme.isShowThemeSetting,
  theme: state.setTheme.theme
});

const mapDispatchToProps = dispatch => {
  return {
    changeTheme(theme) {
      const action = actionCreators.setTheme(theme);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSetting);
