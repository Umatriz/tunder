import React, { MouseEventHandler } from "react";
import { useState, useEffect } from "react";
import { supabase } from "@/app/utils/supabaseClient";

import styles from "./LoginButton.module.css";

type Props = {
  children: React.ReactNode;
  type: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
};

function LoginButton(props: Props) {
  const [type, setType] = useState("");

  useEffect(() => {
    if (props.type === "github") {
      setType("github");
    } else if (props.type === "discord") {
      setType("discord");
    }
  }, []);

  return (
    <div>
      <button
        className={
          type === "github" ? styles["btn-github"] : styles["btn-discord"]
        }
        onClick={props.onclick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default LoginButton;
