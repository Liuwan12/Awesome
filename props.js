import React, {Component} from 'react';
import PropTypes from 'prop-types' 
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class props extends Component{
    static defaultProps = {
        name: '小红',
        age:16
    }
    static propTypes={
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired
    }
    render(){
        return(
            <View>
            <Text style={{fontSize:20,backgroundColor:'red'}}>姓名：{this.props.name}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>年龄：{this.props.age}</Text>
            <Text style={{fontSize:20,backgroundColor:'red'}}>性别：{this.props.sex}</Text>
            </View>
        )
    }
}
