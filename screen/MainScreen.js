import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View style ={MyStyle.ViewStyle}>
      <Text style={{textAlign:'center',position:'absolute',top:'5%',left:0,right:0,fontSize:20,fontWeight:'bold',color:'black'}}>Nguyễn Ngọc Quý -2024802010282</Text>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai1')}>
          <Text style={MyStyle.TextStyle}>Bài 1</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai2')}>
          <Text style={MyStyle.TextStyle}>Bài 2</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai3')}>
          <Text style={MyStyle.TextStyle}>Bài 3</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai4')}>
          <Text style={MyStyle.TextStyle}>Bài 4</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai5')}>
          <Text style={MyStyle.TextStyle}>Bài 5</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai6')}>
          <Text style={MyStyle.TextStyle}>Bài 6</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai7')}>
          <Text style={MyStyle.TextStyle}>Bài 7</Text>
      </TouchableOpacity>
       <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Bai8')}>
          <Text style={MyStyle.TextStyle}>Bài 8</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainScreen

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
          flex:1,
            justifyContent:'center',
        },
        TextStyle:{
          color:'white',
        }
        ,ButtonBg:{
          borderRadius:10,
          backgroundColor:'#38bdf8',
          marginBottom:10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginHorizontal:20
        }
    }
)