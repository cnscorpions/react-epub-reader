import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";

import throttle from "../../utils/throttling";

import styles from "./ProgressSetting.module.scss";

class ProgressSetting extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handleInput = this.handleInput.bind(this);
  }

  // 改变进度条颜色
  handleInput() {
    // const progress = this.myRef.current.value;
    // this.myRef.style.backgroundSize = `${progress}% 100%`;
  }

  render() {
    const {
      isShowProgress,
      progress,
      handleChange,
      isLocationsAvailable
    } = this.props;

    return (
      <div className={isShowProgress ? styles.wrapper : "hide"}>
        <div className={styles["progress-bar-wrapper"]}>
          <input
            className={styles["progress-bar"]}
            type="range"
            max="100"
            min="0"
            step="1"
            ref={this.myRef}
            value={progress}
            onChange={handleChange}
            onInput={this.handleInput}
            disabled={!isLocationsAvailable}
          />
        </div>
        {isLocationsAvailable ? (
          <span className={styles.notice}>{progress + "%"}</span>
        ) : (
          <span className={styles.notice}>loading ...</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShowProgress: state.setProgress.isShowProgress,
  isLocationsAvailable: state.setProgress.isLocationsAvailable,
  progress: state.setProgress.progress
});

const mapDispatchToProps = dispatch => {
  return {
    // 滚动条拖动
    handleChange($event) {
      const { value } = $event.target;
      const action = actionCreators.setProgress(Number(value));
      dispatch(action);
      // let timerId;
      // throttle(timerId, dispatch, action, 1000);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressSetting);
