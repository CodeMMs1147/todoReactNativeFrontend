import { View, Button } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'

const SignInScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<'Ingresar'>>()
    const NavigateToSignUp = () => {
        navigation.navigate('Registrarme')
    }

  return (
    <Box>
        <Text>
            Registrarme
        </Text>
        <Button title='Registrarme' onPress={NavigateToSignUp} />
    </Box>
  )
}

export default SignInScreen