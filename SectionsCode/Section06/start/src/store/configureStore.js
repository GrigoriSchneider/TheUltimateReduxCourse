import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
