import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TaskListTab from './tabs/TaskListTab';
import DocInternalListTab from './tabs/DocInternalListTab';
import DocInListTab from './tabs/DocInListTab';
import DocOutListTab from "./tabs/DocOutListTab";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Database from "./core/database/Database";
import LoginView from './login/LoginView'

const Tab = createBottomTabNavigator();


class App extends React.Component{

  state = {
    login: false
  };

  componentDidMount() {
    Database.init();
    Database.user.add('123', 'https://123', 'iPhone')
      .then((t, r) => {
        console.log(t.rowsAffected);
        //console.log(r);
      })
      .catch((t, e) => {
        console.log(e);
      });

    Database.task.add({id: '1', author: 'Иванов', title: 'Задача 1'})
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      });
    Database.task.add({id: '2', author: 'Петров', title: 'Задача 2'})
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderLogin() {
      return(
        <LoginView setLogin={this.setLogin} login={'Имя поль'}></LoginView>
      );
  }

  render() {
    if (!this.state.login) {
      return this.renderLogin();
    }
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={'Задачи'}
            component={TaskListTab}
            options={{
              tabBarLabel: 'Задачи',
              tabBarIcon: ({color, size}) => (
                <Icon name="tasks" color={color} size={size}/>
              )
            }}
            listeners={{onExit: () =>{
              console.log('Exit!');
              }, }}
          />
          <Tab.Screen
            name={'Входящие'}
            component={DocInListTab}
            options={{
              tabBarLabel: 'Входящие',
              tabBarIcon: ({color, size}) => (
                <MaterialIcon name="inbox-arrow-down" color={color} size={size}/>
              )
            }}
          />
          <Tab.Screen
            name={'Исходящие'}
            component={DocOutListTab}
            options={{
              tabBarLabel: 'Исходящие',
              tabBarIcon: ({color, size}) => (
                <MaterialIcon name="inbox-arrow-up" color={color} size={size}/>
              )
            }}
          />
          <Tab.Screen
            name={'Внутренние'}
            component={DocInternalListTab}
            options={{
              tabBarLabel: 'Внутренние',
              tabBarIcon: ({color, size}) => (
                <MaterialIcon name="inbox-multiple" color={color} size={size}/>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  setLogin = (login) => {
    this.setState({login: login})
  }
}
export default App;

