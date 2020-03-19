import initState from "./initState";

export default function userReducer(user = initState.user, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {...user, auth: true}
    case "USER_LOAD":
      return {...user, apiUrl: "http://", deviceKey: "123456", passwordHash: "phash"}
    case "USER_LOGOUT":
      return {...user, auth: false}
    case "USER_SET_NAME":
      return {...user, username: action.payload}
    case "USER_SET_PASSWORD":
      return {...user, password: action.payload}
    default:
      return user;
  }
}