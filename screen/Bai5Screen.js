import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Square = ({text,bgColor = '#7ce0f9'}) =>(
    <View style={[MyStyle.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
)

const Bai5Screen = () => {
  return (
    <View style={MyStyle.container}> 
      <Square text ="Square 1"></Square>
      <Square text ="Square 2" bgColor='#4dc2c2'></Square>
      <Square text ="Square 3" bgColor='#ff637c'></Square>
    </View>
  )
}

export default Bai5Screen

const MyStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})