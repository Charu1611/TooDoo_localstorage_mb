import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Screen() {
  return (
    <View style={{flex:1, backgroundColor: 'rgb(247,249,249)',}}>
    
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image resizeMode='contain' style={{width:'100%',height:'100%'}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/5038/5038590.png'}} />
      </View>
    </View>
  )
}