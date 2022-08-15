import { BsCheck2 } from "react-icons/bs";

import styles from "./Icon.module.css";

type Props = {
  done: boolean;
};

const Icon = (props: Props) => {
  return (
    <div className={props.done ? styles["icon-done"] : styles.icon}>
      {props.done && <BsCheck2 size={24} />}
    </div>
  );
};

export default Icon;
