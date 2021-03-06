import React from 'react';
import {tabStyles} from "../tabs/styles/TabStyles";
import {View, Text, Button, TextInput, StatusBar} from "react-native";
import {connect} from "react-redux";
import {startUserLogin, userLogin, userSetName, userSetPassword} from "../../actions";

class LoginView extends React.Component {

  componentDidMount() {
    this.dispatch = this.props.dispatch;
  }

  render() {
    return (
      <View style={tabStyles.container}>
        <TextInput
          style={tabStyles.textInput}
          placeholder='Имя пользователя'
          textContentType={'username'}
          value={this.props.username}
          onChange={this.onNameChange}/>
        <TextInput
          style={tabStyles.textInput}
          placeholder='Пароль'
          textContentType='password'
          secureTextEntry={true}
          value={this.props.password}
          onChange={this.onPasswordChange}/>
        <Button
          style={tabStyles.button}
          title="Войти"
          onPress={this.onLoginClick}/>
      </View>
    );
  }

  onLoginClick = () => {
    this.dispatch(startUserLogin(this.props.username, this.props.password));
  }

  onNameChange = (e) => {
    this.dispatch(userSetName(e.target.value));
  }

  onPasswordChange = (e) => {
    this.dispatch(userSetPassword(e.target.value));
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    password: state.user.password,
    wait: state.ui.wait
  };
}
export default connect(mapStateToProps)(LoginView);
