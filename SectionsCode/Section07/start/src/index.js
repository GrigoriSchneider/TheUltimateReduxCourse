import store from "./store/configureStore";
store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/tasks",
    onSuccess: "tasks/getTasks",
    onError: "SHOW_ERROR",
  },
});
