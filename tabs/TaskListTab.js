import React from 'react'
import {Text, View, Button} from 'react-native'
import {tabStyles} from './styles/TabStyles';
import Database from "../core/database/Database";

class TaskListTab extends React.Component{

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return(
    <View style={tabStyles.container}>
      <View style={tabStyles.topBar}>

      </View>
      <Text>Задачи</Text>
      <Text>Tasks</Text>
      <Button onPress={this.onUsersClick} title="Users"/>
    </View>
    );
  }

  onUsersClick =() => {
    Database.task.getAll()
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((err) => {
        console.log(err);
      });

    Database.task.getAll('ива')
      .then((tasks) => {
        //console.log('Filter: ва');
        console.log(tasks);
      })
      .catch((err) => {
        console.log(err);
      })

    //this.props.setLogin(false);
  }
}
export default TaskListTab
