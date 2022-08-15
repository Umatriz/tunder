import { setUpdate } from "@/app/store/features/tasks/tasksSlice";
import { supabase } from "@/app/utils/supabaseClient";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";

import Icon from "./Icon/Icon";
import styles from "./Item.module.css";

type Props = {
  todo: any;
  done: boolean;
};

const Item = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={styles.task}
        onClick={async () => {
          const { data, error } = await supabase
            .from("tasks")
            .update({ done: !props.done })
            .match({ id: props.todo.id });

          console.log(error?.hint);
          console.log(error?.message);
          dispatch(setUpdate());
        }}
      >
        <Icon done={props.done} />
        {props.todo.name}
      </button>
      <button
        className={styles.trash}
        onClick={async () => {
          const { data, error } = await supabase
            .from("tasks")
            .delete()
            .eq("id", `${props.todo.id}`);
          dispatch(setUpdate());
        }}
      >
        <BsTrash size={24} />
      </button>
    </div>
  );
};

export default Item;
