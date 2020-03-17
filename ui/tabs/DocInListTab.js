import React from 'react'
import {Text, View} from 'react-native'
import {tabStyles} from './styles/TabStyles';

class DocInListTab extends React.Component{

  render() {
    return <View style={tabStyles.container}>
      <Text>Входящие</Text>
    </View>;
  }
} export default DocInListTab

