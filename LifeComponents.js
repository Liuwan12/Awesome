

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// 方式一：es6推荐
export default class LifeComponents extends Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
    }
}
// 方式二：es5
// var HelloComponents=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//     }
// })
// module.exports=HelloComponents;
// 方式三：函数式,无状态，没有this指针，没有完整意义的生命周期方法
// function HelloComponents(props){
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{props.name}</Text>
// }
// module.exports = HelloComponents;