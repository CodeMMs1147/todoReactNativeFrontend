import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList, CategoriesStackParamList, HomeStackParamList } from './types'
import CategoriesScreen from '@/utils/screens/categories-screen'
import CategoryScreen from '@/utils/screens/category-screen'

const Stack = createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Categories' 
          component={CategoriesScreen} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name='Category' 
          component={CategoryScreen} 
          options={{
            headerShown: false,
          }} 
        />
    </Stack.Navigator>
  )
}

export default CategoriesStackNavigator