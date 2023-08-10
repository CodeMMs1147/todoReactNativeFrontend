import { Button, View } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'

const WelcomeScreen = () => {

  const navigation = useNavigation<AuthScreenNavigationType<'Bienvenido'>>()

  const NavigateToSignIn = () => {
      navigation.navigate('Ingresar')
  }

  const NavigateToSignUp = () => {
      navigation.navigate('Registrarme')
  }

return (
  <Box>
      <Text>
          Bienvenido
      </Text>
      <Button title='Ir al login' onPress={NavigateToSignUp} />
      <Button title='Ir a registrarme' onPress={NavigateToSignUp} />
  </Box>
)
}

export default WelcomeScreen