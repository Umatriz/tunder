import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { supabase } from "@/app/utils/supabaseClient";

import HomePage from "@/app/screens/Home/Home";
import Tasks from "@/app/screens/Tasks/Tasks";
import Loading from "@/components/Loading/Loading";
import { Session } from "@supabase/supabase-js";

const Home: NextPage = () => {
  const [session, setSession] = useState<Session>();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setSession(supabase.auth.session() as Session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as Session);
    });
    setLoad(false);
  }, []);

  return <div>{!load ? !session ? <HomePage /> : <Tasks /> : <Loading />}</div>;
};

export default Home;
