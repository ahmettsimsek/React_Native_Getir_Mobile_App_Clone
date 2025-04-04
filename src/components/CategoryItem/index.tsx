import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Category } from '../../models'

const {width, height} = Dimensions.get('window')
type CategoryItemProps = {
    item: Category
}

function index({item}: CategoryItemProps){
  return (
    <TouchableOpacity style={{width: width*0.20, height: height*0.11,marginTop: 13, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
      <Image style={{width: width *0.15, height: height*0.10, borderRadius: 8, 
      }} source={{uri: item.src}}/>  
      <Text style={{fontSize: 12, color: '#616161', fontWeight: '600'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default index