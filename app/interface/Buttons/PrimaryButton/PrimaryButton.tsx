import React, { MouseEventHandler } from "react";

import styles from "./PrimaryButton.module.css";

type Props = {
  children: React.ReactNode;
  onclick: MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = (props: Props) => {
  return (
    <div>
      <button className={styles.btn} onClick={props.onclick}>
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
