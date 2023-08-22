import { View, Button } from 'react-native'
import React from 'react'
import { Box, Text } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'

const TodayScreen = () => {

  return (
    <Box>
        <Text>
            Hoy
        </Text>
    </Box>
  )
}

export default TodayScreen