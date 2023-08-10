import { View, Button } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'

const SignUpScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<'Registrarme'>>()
    const NavigateToSignIn = () => {
        navigation.navigate('Ingresar')
    }

  return (
    <Box>
        <Text>
            Ya tienes usuario ?
        </Text>
        <Button title='Ingresar' onPress={NavigateToSignIn} />
    </Box>
  )
}

export default SignUpScreen