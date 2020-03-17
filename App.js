import React from 'react';
//import Database from "./core/database/Database";
import LoginView from './ui/login/LoginView'
import configureStore from "./store";
import {userAuth} from "./actions";
import {connect, Provider} from 'react-redux';
import Tabs from "./ui/tabs/Tabs";

const store = configureStore();
const AppContext = React.createContext();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


class App extends React.Component{

  state = mapStateToProps(store.getState());

  componentDidMount() {

  }

  renderLogin() {
      return(
        <Provider store={store} context={AppContext}>
        <LoginView setLogin={this.setLogin} login={'Имя поль'}></LoginView>
        </Provider>
      );
  }

  render() {

    if (!this.props.auth) {
      return this.renderLogin();
    }
    return (
      <Provider store={store} context={AppContext}>
        <Tabs />
      </Provider>
    );
  }

  setLogin = (login) => {
    store.dispatch(userAuth("", ""));
  }
}

function mapStateToProps(state) {
  return {
    auth: state.user.auth
  };
}

export default connect({context: AppContext})(App);

