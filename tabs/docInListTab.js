import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {tabStyle} from './styles/tabStyle';

class DocInListTab extends React.Component{

  render() {
    return <View style={tabStyle.container}>
      <Text>Входящие</Text>
    </View>;
  }
} export default DocInListTab

