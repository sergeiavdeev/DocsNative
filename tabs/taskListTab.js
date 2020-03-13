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
    alert('Pip');
    Database.task.getAll()
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((err) => {
        console.log(err);
      });

    Database.task.getAll('Ива')
      .then((tasks) => {
        //console.log('Filter: ва');
        console.log(tasks);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
export default TaskListTab
