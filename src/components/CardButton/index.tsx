import React from 'react'
import { Dimensions, Text,TouchableOpacity,View } from 'react-native'

const {height,width} = Dimensions.get('window')
function index() {
  return (
    <TouchableOpacity>
   <View style={{
        width:'100%',
        height:height*0.12,
        backgroundColor:'white',
        justifyContent:'center',
        position:'absolute',
        bottom:0,
       }}
    >
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: '#5D39C1', 
            height:height*0.06,
            width:'90%',
            marginHorizontal: '5%',
            borderRadius: 8,
            marginTop: -10
            }}>

        <Text style={{
            fontWeight:'bold',
            color:'white',
            fontSize: 15,
        }}>Sepete Ekle</Text>
        </View>
   </View>
   </TouchableOpacity>
  )
}

export default index
