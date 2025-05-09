import {  Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { act, useEffect, useState } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import  ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { Foundation, Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import CartScreen from "../screens/CartScreen"
import { connect } from 'react-redux';
import { Product } from '../models';
import * as actions from "../redux/actions/cartActions"

const Stack = createStackNavigator()

const{width, height} = Dimensions.get('window')

function MyStack({navigation,route,cartItems, clearCart}:{cartItems:{product:Product, quantity:number}[],clearCart:() => void}) {

  const tabHiddenRoutes = ["ProductDetails",""];//alt menü paneli gizler
  const [totalPrice, setTotalPrice] = useState<number>(0)

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if(tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: "none" }})
    } else {
      navigation.setOptions({ tabBarStyle : { display: "true" }});
    }
  },[navigation,route])

 //////////////////ikinci kısım
 const getProductsPrice = () => {
  if (!Array.isArray(cartItems)) return; // güvenli kontrol

  let total = 0;
  cartItems.forEach(cartItem => {
    total += cartItem.product.fiyat;
  });
  setTotalPrice(total); // sadece bir kez çağır
  };
  useEffect(() =>{
    getProductsPrice()
  },[cartItems, navigation, route])


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30,marginLeft: 150 }}
            />
          )
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 130
            }}>
              Ürünler
            </Text>
          ),
          headerRight: () => ( //İLK YAPTIĞIM KISIM
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.2,
                height: 33,
                backgroundColor: 'white',
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
        
              <View style={{
                height: 33,
                width: 3,
                backgroundColor: 'white'
              }} />
        
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: '#F3EFFE',
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: '#5D3EBD',
                    fontWeight: 'bold',
                    fontSize: 12
                  }}
                >
                  <Text> {"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}        
      />

      <Stack.Screen
      name = "ProductDetails" 
      component = {ProductDetailsScreen}
      options={{
        headerStyle: { backgroundColor: "#5C3EBC" },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 12}}
          >
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerTitle:() => (
          <Text style= {{
            fontWeight:'bold',
            color: 'white',
            fontSize: 15,
            marginLeft: 130
          }}>
            Ürün Detayı
          </Text>
        ),
        headerRight:() => (
          <TouchableOpacity style={{
            paddingRight: 12,
            
          }}>
            <Foundation name="heart" size={24} color="#32177a"/>
          </TouchableOpacity>
        )

      }}
      />

      <Stack.Screen  // ikinci olarak bu kısmı yaptım 
      name="CartScreen"
      component={CartScreen} 
      options={{
        headerTintColor:'white',
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "#5C3EBC" },
        headerTitle: () => (
          <Text 
            style={{
              fontWeight:'bold',
              fontSize:15, 
              color:'white',
              marginLeft: 140}}
            >
                Sepetim
          </Text>
        ),
        headerLeft: () => (
          <TouchableOpacity
            style={{paddingLeft:10}}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name='close' size={26} color='white'/>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => clearCart()}
            style={{paddingRight:10}}
        >
            <Ionicons name='trash' size={24} color='white' />
        </TouchableOpacity>
        )
      }}
      />

    </Stack.Navigator>
  )
}

// Redux store'dan gerekli state verilerini props(bir bileşenden başka bir bileşene veri 
// veya fonksiyon gönderme yöntemidir.) olarak almak için kullanılır
const mapStateToProps = (state) => {
  const { cartItems } = state; // State içindeki cartItems'ı ayıklar
  return {
    cartItems: cartItems // Bu veriyi component'e props olarak aktarır
  };
};

// Redux dispatch fonksiyonlarını props olarak component'e bağlar
const mapDispatchToProps = (dispatch) => {
  return {
    // Tüm sepeti temizlemek için kullanılacak fonksiyon
    clearCart: () => dispatch(actions.clearCart())
  }; //clearCart fonksiyonu, Redux aksiyonu olan clearCart()'ı dispatch ederek store'u günceller; 
    // böylece sepet   boşaltılır ve bu değişiklik tüm uygulamaya yansır.
}

// HomeNavigator bileşeni, navigasyon, route, cartItems ve clearCart fonksiyonunu prop olarak alır
function HomeNavigator({ navigation, route, cartItems, clearCart }: { clearCart: () => void }) {
  // Tüm bu prop'ları MyStack component'ine iletir
  return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />
}

// Redux bağlantısı yapılır: state'ten cartItems alınır, clearCart action'ı bağlanır
export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)