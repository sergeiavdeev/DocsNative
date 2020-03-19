import {combineReducers} from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
  ui: uiReducer
})
export default rootReducer;
