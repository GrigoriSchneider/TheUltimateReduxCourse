import store from "./store/configureStore";
import { loadTasks } from "./store/tasks";

store.dispatch(loadTasks());
