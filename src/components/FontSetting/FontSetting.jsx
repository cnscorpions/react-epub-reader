import React, { Component } from "react";

import { connect } from "react-redux";

import styles from "./FontSetting.module.scss";

class FontSetting extends Component {
  render() {
    const fontSizeList = [
      { fontSize: 12 },
      { fontSize: 14 },
      { fontSize: 16 },
      { fontSize: 18 },
      { fontSize: 20 },
      { fontSize: 22 }
    ];

    return (
      <div className={this.props.isShowFontSetting ? styles.wrapper : "hide"}>
        <div className={styles["mark-small"]}>A</div>
        <div className={styles["selector-wrapper"]}>
          {getFontSizeList(fontSizeList, this.props)}
        </div>
        <div className={styles["mark-large"]}>A</div>
      </div>
    );
  }
}

function getFontSizeList(fontSizeList, props) {
  const { fontSize } = props;
  const selectors = fontSizeList.map((fontSizeObj, index) => (
    <div className={styles.selector} key={index}>
      <div className={index === 0 ? "hide" : styles.line}></div>
      <div
        className={
          fontSize === fontSizeObj.fontSize ? styles["point-wrapper"] : "hide"
        }
      >
        <div className={styles.point}>
          <div className={styles["small-point"]}></div>
        </div>
      </div>
      <div
        className={index === fontSizeList.length - 1 ? "hide" : styles.line}
      ></div>
    </div>
  ));
  return selectors;
}

const mapStateToProps = state => ({
  isShowFontSetting: state.setFont.isShowFontSetting,
  fontSize: state.setFont.fontSize
});

// 设置默认props
FontSetting.defaultProps = {
  fontSize: 16
};

export default connect(mapStateToProps, null)(FontSetting);
