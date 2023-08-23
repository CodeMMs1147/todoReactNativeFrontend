import { Button, View } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'
import { LinearGradient } from 'expo-linear-gradient'

const WelcomeScreen = () => {

  const navigation = useNavigation<AuthScreenNavigationType<'Bienvenido'>>()

  const NavigateToSignIn = () => {
      navigation.navigate('Ingresar')
  }

  const NavigateToSignUp = () => {
      navigation.navigate('Registrarme')
  }

return (
  <SafeAreaWrapper>
    <LinearGradient 
    colors={[ '#ffffff', '#fef8ff', '#fcecff', '#fae2ff']}
      style={{ flex: 1 }}
    />
    <Box>
      <Text>
          Bienvenido
      </Text>
      <Button title='Ir al login' onPress={NavigateToSignIn} />
      <Button title='Ir a registrarme' onPress={NavigateToSignUp} />
    </Box>
  </SafeAreaWrapper>
)
}

export default WelcomeScreen