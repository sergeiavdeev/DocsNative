import React from 'react';
import {tabStyles} from "../tabs/styles/TabStyles";
import {View, Text, Button, TextInput, StatusBar} from "react-native";
import {userAuth} from "../../actions";
import {store} from '../../App';

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
    //store.dispatch(userAuth("", ""));
    this.props.setLogin(true);
  }
}
