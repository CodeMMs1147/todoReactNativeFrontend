import Button from '@/components/Button';
import Navigation from '@/navigation';
import theme, { Text } from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useUserGlobalStore from '@/store/useUserGlobalStore';

export default function App() {

  const { user, updateUser } = useUserGlobalStore()

  console.log(`user`, JSON.stringify(user, null, 2))

  useEffect(() => {
    updateUser({
      email: 'code@gmail.com',
      name: 'juan'
    })
    return () => {}
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}