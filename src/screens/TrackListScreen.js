import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TrackListScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button title='Go to TrackDetails' onPress={() => navigation.navigate("TrackDetail")} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
})

export default TrackListScreen