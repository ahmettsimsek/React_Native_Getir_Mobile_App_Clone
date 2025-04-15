import React, {useState} from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

const {width, height} = Dimensions.get('window')

const TypeBox = ({item, setCat, active} : {item:string, setCat: any, active:string}) => {
    return (
        <TouchableOpacity 
        onPress={() => setCat(item)}
        style = {[{flexDirection: 'row',
        alignItems:'center' ,
        paddingHorizontal: 10,
        borderRadius: 8,
        height:height*0.044,
        marginRight: 12}, 
        item == active ? {backgroundColor:'#5C3EBC'}:{borderColor:'#6B7287', borderWidth: 0.2}]}
         >

            <Text style = {[{fontSize: 12, color: '#7849f7', fontWeight: 'bold'}, item == active && {color: 'white'}]}>{item}</Text>

        </TouchableOpacity>
    )
}

function index() {

    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
  return (
    <ScrollView
     style = {{width: '100%',
       height: height*0.072, 
       backgroundColor: 'white',
       flexDirection:'row', 
       paddingVertical: height*0.014,
       paddingHorizontal: 12,
       borderBottomColor: 'lightgray',
       borderBottomWidth: 1,
       }} 
       showsHorizontalScrollIndicator = {false} 
       bounces = {true} horizontal = {true}
       >

        {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
            <TypeBox item={item} setCat={setCategory} active={category} />
        ))}
    </ScrollView>
  )
}

export default index
