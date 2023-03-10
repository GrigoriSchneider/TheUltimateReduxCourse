import store from "./store/configureStore";
import {
  loadTasks,
  addNewTask,
  updateCompleted,
  deleteTask,
} from "./store/tasks";

store.dispatch(loadTasks());
// store.dispatch(addNewTask({ task: "Complete this exercise" }));
store.dispatch(updateCompleted({ id: 6, completed: true }));
store.dispatch(updateCompleted({ id: 8, completed: true }));
// store.dispatch(updateCompleted({ id: 6, completed: false }));

store.dispatch(deleteTask({ id: 6 }));
