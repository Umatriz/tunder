import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "./features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    taskUpdate: taskSlice,
  },
});
