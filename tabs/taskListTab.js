import React from 'react'
import {Text, View} from 'react-native'
import {tabStyle} from './styles/tabStyle';

class TaskListTab extends React.Component{

  render() {
    return <View style={tabStyle.container}>
      <Text>Задачи</Text>
      <Text>Tasks</Text>
    </View>;
  }
} export default TaskListTab
