import { supabase } from "@/app/utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";

import LinkButton from "@/ui/Buttons/LinkButton/LinkButton";

import styles from "./Header.module.css";
import AddTask from "./AddTask.svg";

const Header = () => {
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    setSession(supabase.auth.session() as Session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as Session);
    });
  }, []);

  return (
    <div className={styles.conatiner}>
      <div className={styles.image}>
        <Image src={AddTask} height={550} width={550}></Image>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>Tunder</h1>
        <p className={styles["about-text"]}>Simple task manager</p>
        <LinkButton link="/login">Log in</LinkButton>
      </div>
    </div>
  );
};

export default Header;
