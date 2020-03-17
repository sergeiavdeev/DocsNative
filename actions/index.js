export const userAuth = (username, password) => {
  return {
    type: "AUTH_USER",
    payload: {username: username, password: password}
  }
}

export const userLogout = () => {
  return {
    type: "LOGOUT_USER"
  }
}