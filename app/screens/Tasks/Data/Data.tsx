import { supabase } from "@/app/utils/supabaseClient";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

import { useDispatch, useSelector } from "react-redux";
import { stopUpdate } from "@/app/store/features/tasks/tasksSlice";

import styles from "./Data.module.css";

type Props = {};

const Data = (props: Props) => {
  const dispatch = useDispatch();
  const isUpdate = useSelector((state: any) => state.taskUpdate.update);

  const user = supabase.auth.user();

  const [value, setValue] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*, author")
        .filter("author", "eq", user?.id);
      console.log(data);
      setValue(data);
    };
    fetchData();
    dispatch(stopUpdate());
  }, [isUpdate]);

  return (
    <div>
      <div className={styles["tasks-container"]}>
        {value?.map((todo) => (
          <Item key={todo.id} todo={todo} done={todo.done} />
        ))}
      </div>
    </div>
  );
};

export default Data;
