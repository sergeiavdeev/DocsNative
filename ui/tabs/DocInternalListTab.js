import React from 'react'
import {Text, View} from 'react-native'
import {tabStyles} from './styles/TabStyles';

class DocInternalListTab extends React.Component{

  render() {
    return <View style={tabStyles.container}>
      <Text>Внутренние</Text>
    </View>;
  }
} export default DocInternalListTab

