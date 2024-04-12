import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Bai1Screen = () => {
  return (
    <View style ={MyStyle.ViewStyle}>
      <Text style ={MyStyle.TextStyle}>Hello World</Text>
    </View>
  )
}

export default Bai1Screen

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:'center',
            justifyContent:'center',
        },
        TextStyle:{
            color:'black'
        }
    }
)