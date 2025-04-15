import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window')
type CategoryItemProps = {
    item: Category
}

function index({item}: CategoryItemProps){
  const navigation = useNavigation()
  return (

    <TouchableOpacity 
  onPress={() => navigation.navigate("CategoryDetails", { category: item })}
  style={{         // Bileşenin dış görünümünü belirleyen stil tanımları
    width: width * 0.25,               // Genişlik: ekran genişliğinin %25’i kadar
    height: height * 0.11,             // Yükseklik: ekran yüksekliğinin %11’i kadar
    marginTop: 25,                     // Üstten 25 birim boşluk bırakılır
    flexDirection: 'column',          // İçerikler (resim ve metin) dikey olarak yerleştirilir
    alignItems: 'center',             // İçerikler yatay eksende ortalanır
    justifyContent: 'space-between'   // İçerikler dikey eksende eşit aralıklı şekilde yerleştirilir
  }}
>
  <Image
    style={{
      width: width * 0.15,
      height: height * 0.10,
      borderRadius: 9,
      marginTop: 19
    }}
    source={{ uri: item.src }}
  />
  <Text
    style={{
      fontSize: 12,
      color: '#616161',
      fontWeight: '600',
      marginTop: 5
    }}
  >
    {item.name}
  </Text>
</TouchableOpacity>

  )
}

export default index