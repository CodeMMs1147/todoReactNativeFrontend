import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from './types'
import WelcomeScreen from '@/utils/screens/welcome-screen'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
        />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator