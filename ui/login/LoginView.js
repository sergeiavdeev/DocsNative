import React from 'react';
import {tabStyles} from "../tabs/styles/TabStyles";
import {View, Text, Button, TextInput, StatusBar} from "react-native";
import {connect} from "react-redux";
import {userLogin, userSetName, userSetPassword} from "../../actions";


class LoginView extends React.Component {
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
    this.props.dispatch(userLogin());
  }

  onNameChange = (e) => {
    this.props.dispatch(userSetName(e.target.value));
  }

  onPasswordChange = (e) => {
    this.props.dispatch(userSetPassword(e.target.value));
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
