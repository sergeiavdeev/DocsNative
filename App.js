import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TaskListTab from './tabs/taskListTab';
import DocInternalListTab from './tabs/docInternalListTab';
import DocInListTab from './tabs/docInListTab';
import DocOutListTab from "./tabs/docOutListTab";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Задачи'} component={TaskListTab}/>
        <Tab.Screen name={'Входящие'} component={DocInListTab}/>
        <Tab.Screen name={'Исходящие'} component={DocOutListTab}/>
        <Tab.Screen name={'Внутренние'} component={DocInternalListTab}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

