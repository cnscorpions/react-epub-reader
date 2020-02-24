import React, { Component } from "react";
import ePub from "epubjs";
import { connect } from "react-redux";
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
  }

  // 初始化电子书，获得Book和Rendition
  displayEbook() {
    const ebook = new ePub(ebookUrl);
    this.rendition = ebook.renderTo("ebook", {
      width: window.innerWidth,
      height: window.innerHeight
    });
    // 显示电子素
    this.rendition.display();
    // 获取Theme对象
    this.theme = this.rendition.themes;
    // 注册所有主题
    registerAllTheme(this.theme);
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
  console.log(props);
  const themeObj = props;
  const themes = selectTheme("ALL");
  themes.forEach(theme => {
    const { background, color, text } = theme;
    themeObj.register(text, { body: { background: background, color: color } });
  });
};

const mapStateToProps = state => ({
  fontSize: state.setFont.fontSize,
  skin: state.setTheme.theme
});

export default connect(mapStateToProps, null)(Ebook);
