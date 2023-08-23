import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from './types'
import WelcomeScreen from '@/utils/screens/welcome-screen'
import SignInScreen from '@/utils/screens/sign-in-screen'
import SignUpScreen from '@/utils/screens/sign-up-screen'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Bienvenido'
        options={{headerShown: false

        }}
        component={WelcomeScreen} />
        <Stack.Screen name='Ingresar'
        
        component={SignInScreen} />
        <Stack.Screen name='Registrarme'
        
        component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator