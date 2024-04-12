import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) =>(
    <TouchableOpacity 
        onPress={props.onPress}
        style={{
            backgroundColor:'#ff637c',
            alignSelf:'center',
            padding:10,
            margin:10,
            ...props.buttonStyle
        }}>
        <Text style={{color:'#FFF'}}>{props.text}</Text>

    </TouchableOpacity>
)

const Bai3Screen = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Button text='Say Hello' onPress={() => alert("Hello!")}></Button>
      <Button text='Say Goodbye' onPress={()=> alert("Goodbye!")} buttonStyle ={{backgroundColor:'#4dc2c2'}}></Button>
    </View>
  )
}

export default Bai3Screen