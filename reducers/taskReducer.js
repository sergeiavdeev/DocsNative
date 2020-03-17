import initState from './initState';

export default function taskReducer(state = initState.task, action) {
  switch (action.type) {
    case "GET_TASK_LIST":
      return {
        ...state, taskList: [{id: 1, title: "Задача 1"}, {id: 2, title: "Зфдфача 2"}]
      }
    case "DELETE_TASK":
      return {
        ...state, taskList: []
      }

    default: return state;
  }
}