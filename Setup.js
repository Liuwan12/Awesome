// import React, {Component} from '../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import EIComponent from './EIComponent';
import Props from './props.js';
import StateTest from './StateTest';
import RefTest from './RefTest';
import Student from './Student';
import MingStudent from './MingStudent';


export default class Setup extends Component{
  constructor(props){
      super(props);
      this.state=({
          remove:false,
          result: '',
          size: 0
      })
      this.stu=new Student('小红','女',16);
      this.ming = new MingStudent();
  };
  /* <Text style={{fontSize:20}}>名字:{name}</Text>
        <Text style={{fontSize:20}}>年龄:{age}</Text>
        <Text style={{fontSize:20}}
            onPress={()=>{
                var result=sum(2,3);
                this.setState({
                    result:result
                })
            }}
        >2+3={this.state.result}</Text> */
  render() {
      var params = {name: '小张',age: 18, sex: '男'};
      var {name,sex} = params;
    return (
        <View style={styles.container}>
            <Props 
            // 延展操作符
                // {...params}
                // 解构赋值（从一组数据中取制定值）
                name={name}
                sex={sex}
            />
            <StateTest />
            <Text
                style={{fontSize:20}}
                onPress={()=>{
                    // 使用组件属性的方式(refs:本页面的ref集合)
                    // var size=this.refs.reftest.getSize();
                    // this.refs['reftest'].getSize()
                    var size=this.reftest.getSize()
                    this.setState({
                        size:size
                    })
                }}
            >获取气球大小:{this.state.size}</Text>
            <RefTest 
                // 定义组件属性的两种方式
                // ref="reftest"
                ref={reftest=>this.reftest=reftest}
            />
            <Text>{this.stu.getDescription()}</Text>
            <Text>{this.ming.getDescription()}</Text>
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