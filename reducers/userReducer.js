import initState from "./initState";

export default function userReducer(state = initState.user, action) {
  switch (action.type) {
    case "AUTH_USER":
      return {...state, auth: true}
    case "LOAD_FROM_STORE":
      return {...state, apiUrl: "http://", deviceKey: "123456", passwordHash: "phash"}
    case "LOGOUT_USER":
      return {...state, auth: false}
    default:
      return state;
  }
}