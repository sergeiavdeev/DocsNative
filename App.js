import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TaskListTab from './tabs/taskListTab';
import DocInternalListTab from './tabs/docInternalListTab';
import DocInListTab from './tabs/docInListTab';
import DocOutListTab from "./tabs/docOutListTab";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as SQLite from 'expo-sqlite';

const Tab = createBottomTabNavigator();
const db = SQLite.openDatabase('DocsDb', 1);

export default class App extends React.Component{

  componentDidMount() {
    /*db.transaction(tx => {
      tx.executeSql("create table if not exists Task (id text primary key, title text, author text)");
    });*/
  }

  render() {
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
}

