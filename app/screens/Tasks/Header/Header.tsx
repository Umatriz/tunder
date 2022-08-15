import { supabase } from "@/app/utils/supabaseClient";
import PrimaryButton from "@/ui/Buttons/PrimaryButton/PrimaryButton";
import React from "react";

import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  async function logOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className={styles.header}>
      <span className={styles.title}>My tasks</span>
      <PrimaryButton onclick={logOut}>Log out</PrimaryButton>
    </div>
  );
};

export default Header;
