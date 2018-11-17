import React, {Component} from 'react';
import PropTypes from 'prop-types' 
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class StateTest extends Component{
    state={
        size:80
    }
    constructor(props){
        super(props);
        // this.state={
        //     size:80,
        // }
    }
    getSize(){
        return this.state.size
    }
    render(){
        return(
            <View>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size+10
                        })
                    }}
                >我吹啊吹啊</Text>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size-10
                        })
                    }}
                >变小</Text>
                <Image
                    style={{width:this.state.size,height:this.state.size}}
                    source={require('./qiqiu.png')}
                />
            </View>
        )
    }
}