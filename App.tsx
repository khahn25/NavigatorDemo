import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';


const appStackNavigator = createStackNavigator(
  {
    MainScreen1: { screen: Screen1 },
    MainScreen2: { screen: Screen2 },
    MainScreen3: { screen: Screen3 }
  }, 
  {
    initialRouteName: 'MainScreen1'
  }
)


export default createAppContainer(appStackNavigator)