import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/tasks";

// const unsubscribe = store.subscribe(() => {
//     console.log("Updated", store.getState());
// });

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
console.log(store.getState());

// unsubscribe();
store.dispatch(completedTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());
