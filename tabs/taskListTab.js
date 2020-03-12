import React from 'react'
import {Text, View, Button} from 'react-native'
import {tabStyle} from './styles/tabStyle';
import Database from "../core/database/Database";

class TaskListTab extends React.Component{

  render() {
    return(
    <View style={tabStyle.container}>
      <Text>Задачи</Text>
      <Text>Tasks</Text>
      <Button onPress={this.onUsersClick} title="Users"/>
    </View>
    );
  }

  onUsersClick() {

    Database.getUsers((rows) => {
      rows.map((el) => {
        alert(el.apiUrl);
      })
    })
  }

}
export default TaskListTab
