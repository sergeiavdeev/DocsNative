import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {tabStyles} from './styles/TabStyles';

class DocOutListTab extends React.Component{

  render() {
    return <View style={tabStyles.container}>
      <Text>Исходящие</Text>
    </View>;
  }
} export default DocOutListTab
