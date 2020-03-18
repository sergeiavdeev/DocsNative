import React from 'react';
import {tabStyles} from "../tabs/styles/TabStyles";
import {View, Text, Button, TextInput, StatusBar} from "react-native";
import {connect} from "react-redux";
import {userAuth, userSetName} from "../../actions";


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
          secureTextEntry={true}/>
        <Button
          style={tabStyles.button}
          title="Войти"
          onPress={this.onLoginClick}/>
      </View>
    );
  }

  onLoginClick = () => {
    this.props.dispatch(userAuth());
  }

  onNameChange = (e) => {
    this.props.dispatch(userSetName(e.target.value));
  }
}


function mapStateToProps(state) {
  return {
    username: state.user.ui.username,
    password: state.user.ui.password
  };
}

export default connect(mapStateToProps)(LoginView);
