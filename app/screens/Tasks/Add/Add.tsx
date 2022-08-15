import { supabase } from "@/app/utils/supabaseClient";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setUpdate } from "@/app/store/features/tasks/tasksSlice";

import { IoAdd } from "react-icons/io5";

import styles from "./Add.module.css";

type Props = {};

interface IDataFields {
  name: string;
}

const Add = (props: Props) => {
  const dispatch = useDispatch();

  const user = supabase.auth.user();

  async function addTask(dt: IDataFields) {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ author: user?.id, name: dt.name }], { returning: "minimal" });
    console.log(error?.message);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDataFields>();

  const onSubmit: SubmitHandler<IDataFields> = (data) => {
    reset();
    addTask(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.input}
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
        />
        <div>{errors.name?.message}</div>
        <button
          className={styles["add-btn"]}
          onClick={() => {
            dispatch(setUpdate());
          }}
        >
          <IoAdd size={32} />
        </button>
      </form>
    </div>
  );
};

export default Add;
