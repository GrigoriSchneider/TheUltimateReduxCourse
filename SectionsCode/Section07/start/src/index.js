import store from "./store/configureStore";
import { loadTasks, addNewTask } from "./store/tasks";

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "Complete this exercise" }));
