import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  update: true,
};

export const taskSlice = createSlice({
  name: "taskUpdate",
  initialState,
  reducers: {
    setUpdate: (state) => {
      state.update = true;
    },
    stopUpdate: (state) => {
      state.update = false;
    },
  },
});

export const { setUpdate, stopUpdate } = taskSlice.actions;
export default taskSlice.reducer;
