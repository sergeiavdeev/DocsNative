import React from 'react';
import {tabStyles} from "../tabs/styles/TabStyles";
import {View, Text, Button, TextInput, StatusBar} from "react-native";


export default class LoginView extends React.Component {

  state = {
    wait: false,
    login: false
  };

  render() {
    return (
      <View style={tabStyles.container}>

        <TextInput
          style={tabStyles.textInput}
          placeholder='Имя пользователя'
          textContentType={'username'}/>
        <TextInput
          style={tabStyles.textInput}
          placeholder='Пароль'
          textContentType='password'
          secureTextEntry={true}/>
        <Button
          style={tabStyles.button}
          title="Войти"
          onPress={this.onLoginClick}/>
      </View>
    );
  }

  onLoginClick = () => {
    this.props.setLogin(true);
  }
}
