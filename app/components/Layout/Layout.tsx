import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <main className={styles.container}>{props.children}</main>
    </div>
  );
};

export default Layout;
