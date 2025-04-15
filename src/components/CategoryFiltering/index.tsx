import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, {useState} from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'

const{height, width} = Dimensions.get('window')

const CategoryBox =({item, active}:{item:Category, active:Category}) => {
    return(
        <View style={[{paddingHorizontal: 9, alignItems: 'center', flexDirection: 'row'},
           item.name == active.name && {borderBottomColor: '#FFD00C', borderBottomWidth: 1.6}]}>
            <Text style= {{fontSize: 16, color: 'white', fontWeight: 700}}>{item.name}</Text>
        </View>
    )
}


function index({category}: {category: Category}) {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)
  return (
    <ScrollView style = {{width: '%100', backgroundColor: '#7849f7', height: height* 0.080}} showsHorizontalScrollIndicator = {false} bounces = {true} horizontal = {true}>

        {categories.map((item) => (
            <CategoryBox key={item.id} item={item} active={category}/>
        ))}

    </ScrollView>
  )
}

export default index