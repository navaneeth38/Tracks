import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h4>Create a Track</Text>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
})

export default TrackCreateScreen