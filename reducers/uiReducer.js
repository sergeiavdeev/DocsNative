import initState from "./initState";

export default function uiReducer(ui = initState.ui, action) {
  switch (action.type) {
    case "UI_WAIT":
      return {...ui, wait: action.payload.wait}
    default:
      return ui;
  }
}