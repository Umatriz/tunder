import React from "react";
import Link from "next/link";

import styles from "./LinkButton.module.css";

type Props = {
  children: React.ReactNode;
  link: string;
};

const PrimaryButton = (props: Props) => {
  return (
    <div>
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    </div>
  );
};

export default PrimaryButton;
