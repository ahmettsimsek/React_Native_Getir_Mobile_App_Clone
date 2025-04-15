import {  Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import  ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { Foundation, Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator()
function MyStack({navigation,route}) {

  const tabHiddenRoutes = ["ProductDetails"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if(tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: "none" }})
    } else {
      console.log(" Aç ", routeName);
      navigation.setOptions({ tabBarStyle : { display: "true" }});
    }
  },[navigation,route])


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
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerTitle: () => (
           <Text style = {{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 130}}>
            Ürünler
           </Text>
          )
        }}
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

    </Stack.Navigator>
  )
}

export default function HomeNavigator({navigation, route}){
  return <MyStack navigation = {navigation} route={route} />
}