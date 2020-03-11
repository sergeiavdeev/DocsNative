import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {tabStyle} from './styles/tabStyle';

class DocOutListTab extends React.Component{

  render() {
    return <View style={tabStyle.container}>
      <Text>Исходящие</Text>
    </View>;
  }
} export default DocOutListTab
