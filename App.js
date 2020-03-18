import React from 'react';
//import Database from "./core/database/Database";
import LoginView from './ui/login/LoginView'
import configureStore from "./store";
import {userAuth} from "./actions";
import {connect, Provider} from 'react-redux';
import Tabs from "./ui/tabs/Tabs";
import MainActivity from "./ui/MainActivity";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  //App.setState({user: store.getState().user});
});


class App extends React.Component{

  render() {
    return (
      <Provider store={store}>
        <MainActivity/>
      </Provider>
    );
  }
}

export default App;

