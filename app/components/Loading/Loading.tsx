import React from "react";

import styles from "./Loading.module.css";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["lds-default"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
