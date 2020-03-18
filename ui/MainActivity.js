import React from 'react';
import {connect} from "react-redux";
import LoginView from "./login/LoginView";
import Tabs from "./tabs/Tabs";

class MainActivity extends React.Component{

  renderLogin() {
    return(
      <LoginView />
    );
  }

  renderTabs() {
    return(
      <Tabs />
    );
  }

  render() {
    if (this.props.auth) {
      return this.renderTabs();
    } else {
      return this.renderLogin();
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.user.auth
  };
}

export default connect(mapStateToProps)(MainActivity);