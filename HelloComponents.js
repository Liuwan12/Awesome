

import React, {Component} from '../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// 方式一：es6推荐
export default class HelloComponents extends Component{
    constructor(props){
        console.log('constructor')
        super(props);
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
    }
}