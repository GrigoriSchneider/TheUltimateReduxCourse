import store from "./store/configureStore";
store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/tasks",
    onStart: "tasks/apiRequested",
    onSuccess: "tasks/getTasks",
    onError: "SHOW_ERROR",
  },
});
