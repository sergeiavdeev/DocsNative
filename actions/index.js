export const userAuth = () => {
  return {
    type: "AUTH_USER"
  }
}

export const userLogout = () => {
  return {
    type: "LOGOUT_USER"
  }
}

export const userSetWait = (wait) => {
  return {
    type: "USER_UI_WAIT",
    payload: {
      wait: wait
    }
  }
}

export const userSetName = (name) => {
  return {
    type: "USER_UI_SET_NAME",
    payload: {
      username: name
    }
  }
}