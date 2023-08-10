import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList, HomeStackParamList } from './types'
import HomeScreen from '@/utils/screens/home-screen'

const Stack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='EditTask' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator