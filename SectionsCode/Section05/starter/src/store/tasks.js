import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("TASK_COMPLETED");
console.log(addTask.type);

// Reducer
let id = 0;

export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
  [completedTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = true;
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];

//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     case completedTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               completed: true,
//             }
//           : task
//       );

//     default:
//       return state;
//   }
// }
