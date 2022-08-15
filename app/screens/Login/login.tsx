import { supabase } from "@/app/utils/supabaseClient";
import LoginButton from "@/ui/Buttons/LoginButton/LoginButton";

import styles from "./login.module.css";

type Props = {};

const login = (props: Props) => {
  async function logInGitHub() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });
  }
  async function logInDiscord() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "discord",
    });
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>Log in with one of the following:</p>
      <LoginButton onclick={logInGitHub} type="github">
        GitHub
      </LoginButton>
      <LoginButton onclick={logInDiscord} type="discord">
        Discord
      </LoginButton>
    </div>
  );
};

export default login;
