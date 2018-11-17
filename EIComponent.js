import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// 变量和方法的导入与导出
var name = '小明';
var age = '22';
export {name,age};
export default class EIComponent extends Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}></Text>
    }
}
// 导出方法
export function sum(a,b){
    return a+b;
}