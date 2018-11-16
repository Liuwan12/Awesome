

import React, {Component} from '../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LifeComponents from './LifeComponents'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <LifeComponents
            name="小明"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});