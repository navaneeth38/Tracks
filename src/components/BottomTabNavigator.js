import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackListScreen from '../screens/TrackListScreen'
import TrackCreateScreen from '../screens/TrackCreateScreen'
import AccountScreen from '../screens/AccountScreen'
import TrackDetailScreen from '../screens/TrackDetailScreen'

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator()
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Tracklist" component={TrackListScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )  

}

export default BottomTabNavigator