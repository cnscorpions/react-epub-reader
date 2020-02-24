import React, { Component } from "react";
import ePub from "epubjs";
import ebookUrl from "../assets/ebook/demo.epub";
import styles from "./Ebook.module.scss";

import Mask from "./Mask/Mask";
import TitleBar from "./TitleBar/TitleBar";
import MenuBar from "./MenuBar/MenuBar";

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
    this.rendition.display();
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

  componentDidMount() {
    this.displayEbook();
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

export default Ebook;
