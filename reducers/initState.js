const initState = {
  user: {
    apiUrl: "",
    deviceKey: "",
    passwordHash: "",
    auth: false,
    ui: {
      wait: false,
      username: "",
      password: ""
    }
  },
  task: {
    taskList: [],
  }
};
export default initState;