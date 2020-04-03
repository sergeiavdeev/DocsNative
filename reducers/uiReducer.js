import initState from "./initState";

export default function uiReducer(ui = initState.ui, action) {
  switch (action.type) {
    case "UI_WAIT":
      let wait = ui.wait;
      wait = action.payload ? ++wait : --wait;
      if (wait < 0)wait = 0;
      return {...ui, wait: wait}
    default:
      return ui;
  }
}
