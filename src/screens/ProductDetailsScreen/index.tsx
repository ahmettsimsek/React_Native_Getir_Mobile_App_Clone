import React, {useEffect, useState} from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { Product } from '../../models'
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"

function index(props) {

  const[product, setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
  }, [])
  console.log("Our Product is", product)
  if(!product){
    return<ActivityIndicator color={"#5D3EBD"} />
  }

  return (
    <View style={{ flex: 1,}}>
    <ScrollView>
        <ImageCarousel images={product?.images}/>  /* Görseller */

        /* Fiyat, ad ve miktar */
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />

        <Text style={{    /* Detaylar başlığı */
          paddingHorizontal: 15, 
          paddingVertical: 14,
          color: "#808B99", 
          fontWeight: '700',
          fontSize: 15}}>
        Detaylar</Text>

        <DetailProperty />     /* Ürün detayları */
    </ScrollView>  
    <CardButton item={product}/>  /* Sepete ekleme butonu */
    </View>
  )
}

export default index
