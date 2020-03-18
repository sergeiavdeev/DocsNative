import React from 'react'
import {Text, View, Button} from 'react-native'
import {tabStyles} from './styles/TabStyles';
import {connect} from "react-redux";
import {userLogout} from "../../actions";
//import Database from "../../core/database/Database";

class TaskListTab extends React.Component{

  constructor(props) {
    super(props);
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
    this.props.dispatch(userLogout());
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(TaskListTab);
