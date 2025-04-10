import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();
function RootNavigator() {

  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style = {{
          width: 58,
          height: 58,
          backgroundColor: "#5C3EBC",
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 33,
          marginLeft: 10,
          marginTop: -10,
          borderWidth: 3,
          borderColor: 'gray',

        }}
      >
        <Entypo name="list" size={32} color="#FFD00C" />
      </TouchableOpacity>
    )}

  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
        height: 58,
        },
      }}
    >

      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />

          )
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />

          )
        }}
      />

      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => < CustomTabBarButton {...props} />
        }}
      />

      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />

          )
        }}
      />

      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />

          )
        }}
      />
    </Tab.Navigator>

  )
}

export default RootNavigator