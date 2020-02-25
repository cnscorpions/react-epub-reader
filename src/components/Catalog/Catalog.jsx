import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";
import styles from "./Catalog.module.scss";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(href) {
    this.props.navigateTo(href);
  }

  render() {
    const { catalog } = this.props;

    return (
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Table of Content</h3>
          <ul className={styles["link-wrapper"]}>
            {catalog
              ? catalog.map((item, index) => (
                  <li key={index} className={styles.link}>
                    <a
                      href={item["href"]}
                      onClick={() => this.handleNavigate(item["href"])}
                    >
                      {item["label"]}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

// 有bug, 多了一个key为0
const mapStateToProps = state => ({
  catalog: state.SetNavigation.catalog["0"]
});

const mapDispatchToProps = dispatch => {
  return {
    navigateTo(href) {
      const action = actionCreators.navigateTo(href);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
