import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";
import React from 'react'
import { useTheme } from "@shopify/restyle"
import HomeStackNavigator from "./home-stack-navigator";
import CompletedScreen from "@/utils/screens/completed-screen";
import TodayScreen from "@/utils/screens/today screen";
import CategoriesStackNavigator from "./categories-stack-navigator";
import Icons from "@/components/shared/icons";

const Tab = createBottomTabNavigator<RootBottomTabParamList>()

const BottomTabNavigator = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: theme.colors.gray550,
      tabBarHideOnKeyboard: true,
    }}
    >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackNavigator} 
          options={() => ({
            title: 'Home',
            tabBarIcon: ({ color }) => <Icons name='home' color={color} />
          })} 
        />
        <Tab.Screen 
          name="Completed" 
          component={CompletedScreen} 
          options={() => ({
            title: 'Completed',
            tabBarIcon: ({ color }) => <Icons name='completed' color={color} />
          })} 
        />
        <Tab.Screen 
          name="Today" 
          component={TodayScreen} 
          options={() => ({
            title: 'Today',
            tabBarIcon: ({ color }) => <Icons name='calendar' color={color} />
          })} 
        />
        <Tab.Screen 
          name="CategoriesStack" 
          component={CategoriesStackNavigator} 
          options={() => ({
            title: 'Categories',
            tabBarIcon: ({ color }) => <Icons name='categories' color={color} />
          })} 
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator