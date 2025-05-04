import React from 'react'
import { Dimensions, Text,TouchableOpacity,View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import { Product } from '../../models'

const {height,width} = Dimensions.get('window')

type cartButtonType ={
  addItemToCart: (a:Product) => void;
  item:Product;
}

function index({item,addItemToCart}:cartButtonType) {
  return (
    <TouchableOpacity 
      onPress={() => addItemToCart(item)}
      style={{
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
  
   </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart : ( product: Product) =>
    dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null, mapDispatchToProps)(index)
