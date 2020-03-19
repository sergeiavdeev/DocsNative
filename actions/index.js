export const userLogin = () => {
  return {
    type: "USER_LOGIN"
  }
}

export const userLogout = () => {
  return {
    type: "USER_LOGOUT"
  }
}

export const userSetName = (name) => {
  return {
    type: "USER_SET_NAME",
    payload: name
  }
}

export const userSetPassword = (password) => {
  return {
    type: "USER_SET_PASSWORD",
    payload: password
  }
}

export const uiSetWait = (wait) => {
  return {
    type: "UI_WAIT",
    payload: wait
  }
}