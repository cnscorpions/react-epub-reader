import React, { Component } from "react";
import ePub from "epubjs";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators/actionCreators";

import ebookUrl from "../assets/ebook/demo.epub";
import styles from "./Ebook.module.scss";

import Mask from "./Mask/Mask";
import TitleBar from "./TitleBar/TitleBar";
import MenuBar from "./MenuBar/MenuBar";

import selectTheme from "../utils/selectTheme";

class Ebook extends Component {
  constructor(props) {
    super(props);
    this.displayEbook = this.displayEbook.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  // 初始化电子书，获得Book和Rendition
  displayEbook() {
    this.ebook = new ePub(ebookUrl);
    this.rendition = this.ebook.renderTo("ebook", {
      width: window.innerWidth,
      height: window.innerHeight
    });
    // 显示电子素
    this.rendition.display();
    // 获取Theme对象
    this.theme = this.rendition.themes;
    // 注册所有主题
    registerAllTheme(this.theme);
    // 默认主题护眼
    this.theme.select("eye");
    // 通过ready钩子来生成locations
    this.ebook.ready
      .then(() => {
        this.navigation = this.ebook.navigation;
        console.log(this.navigation);
        // 生成locations
        return this.ebook.locations.generate();
      })
      .then(result => {
        this.locations = this.ebook.locations;
      })
      .catch(err => console.error(err));
    // 更新百分比状态
    this.props.shiftStatus();
  }

  // 下一页
  goNextPage() {
    if (this.rendition) {
      this.rendition.next();
    }
  }

  // 上一页
  goPrevPage() {
    if (this.rendition) {
      this.rendition.prev();
    }
  }

  // 页面跳转
  jumpTo(href) {
    this.rendition.display(href);
  }

  // 监听进度
  onProgress = progress => {
    // 将百分比转化为小数形式
    const percentage = progress / 100;
    // 获取百分比对应的EpubCFI
    const location =
      percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0;
    // 跳转到百分比对应的电子书位置
    this.rendition.display(location);
  };

  // 挂载到DOM节点
  componentDidMount() {
    this.displayEbook();
  }

  // 更新
  componentDidUpdate() {
    // 设置字体
    const fontSize = this.props.fontSize + "px";
    this.theme.fontSize(fontSize);
    // 更新主题
    this.theme.select(this.props.skin);
    // 根据进度条跳转
    this.onProgress(this.props.progress);
  }

  render() {
    return (
      <div className={styles["ebook-wrapper"]}>
        <TitleBar />
        {/* 电子书籍挂载节点 */}
        <div id="ebook"></div>
        {/* 遮罩 */}
        <Mask goPrevPage={this.goPrevPage} goNextPage={this.goNextPage} />
        <MenuBar />
      </div>
    );
  }
}

// 注册所有主题
const registerAllTheme = props => {
  const themeObj = props;
  const themes = selectTheme("ALL");
  themes.forEach(theme => {
    const { background, color, text } = theme;
    themeObj.register(text, { body: { background: background, color: color } });
  });
};

const mapStateToProps = state => ({
  fontSize: state.setFont.fontSize,
  skin: state.setTheme.theme,
  progress: state.setProgress.progress,
  isLocationsAvailable: state.setProgress.isLocationsAvailable
});

const mapDispatchToProps = dispatch => {
  return {
    shiftStatus() {
      const action = actionCreators.showProgressCent();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ebook);
