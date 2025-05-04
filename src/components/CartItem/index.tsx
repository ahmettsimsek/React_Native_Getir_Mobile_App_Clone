import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import {Product} from "../../models"
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"


type CartItemProps = {
    product:Product;
    quantity:number;
    removeFromCart: (product:Product) => void;
}

const {width,height} = Dimensions.get('window')

function index({product,quantity, removeFromCart}:CartItemProps) {
  return (
    <View style={{width:'100%',backgroundColor:'white'}}>
    <View style={{ //ürünü artırıp azaltığımız üst kısmın componenti
        borderBottomWidth: 0.9,
        width:width*0.92,
        marginHorizontal:width*0.04,
        borderBottomColor:'lightgrey',
        height:height*0.13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:width*0.04,
        backgroundColor:'white'}}>
        
        <View //resmin olduğu kısmı kapsar
          style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{
               borderWidth:0.45,
               borderColor:'lightgray',
               borderRadius:8,
               padding:4
            }}>
            <Image
            style={{
              height:height*0.09, 
              width:height*0.09,
             
            }} 
            source={{uri:product.image}}
            />
            </View>

            <View style={{marginLeft: 8}}>
                <Text 
                  style={{
                    fontSize:14,
                    fontWeight:'700',
                    maxWidth:width*0.46,}}>{product.name}</Text>

                <Text 
                  style={{
                    fontSize:14,
                    marginTop:3,
                    color:'#848897',
                    fontWeight:'700'}}>{product.miktar}</Text>


                <Text 
                  style={{
                    color:'#5D3EBD',
                    fontWeight:'bold',
                    marginTop: 6,
                    fontSize: 15
                }}
                >
                <Text>{"\u20BA"}</Text>{product.fiyat}</Text>
            </View>
        </View>

        <View // artırma, azaltma, ürün sayısı gösteren kısım
          style={{
            elevation: 3, //gölgelendirme aktif olur
            flexDirection:'row',
            width:width*0.21,
            borderColor: 'lightgrey',
            borderWidth:0.5,
            height:height*0.037,
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'space-around',
            
        }}
        >
            <TouchableOpacity //azaltma
              onPress={()=> removeFromCart(product)}
              style={{
                flex:1,
                alignItems:'center'
              }}>
                <Text>-</Text>
            </TouchableOpacity>

            <View //adet değeri
              style={{
                flex:1,
                alignItems:'center',
                backgroundColor:'#5D3EBD',
                height:height*0.031,
                marginTop:4,
                justifyContent:'center',
              }}>
                <Text 
                  style={{
                    fontWeight:'bold',
                    color:'white',
                    fontSize: 12
                    }}>
                      {quantity}
                    </Text>
            </View>

            <View  //artırma
              style={{
                flex:1,
                alignItems:'center'
              }}>
                <Text>+</Text>
            </View>
        

        </View>
    </View>
    </View>
  )
}

// Redux ile dispatch işlemlerini component'e prop olarak bağlar
const mapDispatchToProps = (dispatch) => {
  return {
    // Sepetten ürün çıkarmak için kullanılacak fonksiyonu tanımlar
    // Bu fonksiyon, ilgili ürünü alır ve removeFromCart action'ını çağırır
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product))
  };
};

// Redux'ın connect fonksiyonu ile bu component'e sadece,
// dispatch fonksiyonları bağlanır (state yok)
export default connect(null, mapDispatchToProps)(index);
