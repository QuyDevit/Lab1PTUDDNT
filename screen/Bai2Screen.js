import { View, Text,Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Bai2Screen = () => {
  return (
    <View style={MyStyle.container}>
      <Button title='Button 1' onPress={() => alert("Hello!")}></Button>
      <TouchableOpacity style={MyStyle.button} onPress={() => alert('Hello 2')}>
        <Text style={MyStyle.text}>
            Button 2
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Bai2Screen

const MyStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    button:{
        backgroundColor:'blue',
        marginTop:10,
        alignItems:'center',
        padding:10
    },
    text:{
        color:'white',
        fontSize:18
    }
})