import React from 'react';
import TaskListTab from "./TaskListTab";
import Icon from "react-native-vector-icons/FontAwesome5";
import DocInListTab from "./DocInListTab";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import DocOutListTab from "./DocOutListTab";
import DocInternalListTab from "./DocInternalListTab";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

class Tabs extends React.Component{

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
export default Tabs;