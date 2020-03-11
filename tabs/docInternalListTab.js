import React from 'react'
import {Text, View} from 'react-native'
import {tabStyle} from './styles/tabStyle';

class DocInternalListTab extends React.Component{

  render() {
    return <View style={tabStyle.container}>
      <Text>Внутренние</Text>
    </View>;
  }
} export default DocInternalListTab

