import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TaskListTab from './tabs/taskListTab';
import DocInListTab from './tabs/docInListTab';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Задачи'} component={TaskListTab}/>
        <Tab.Screen name={'Входящие'} component={DocInListTab}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
