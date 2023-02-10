import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from './Spacer'
import { useNavigation } from '@react-navigation/native';

const NavLink = ({ title, routeName}) => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity onPress = { () => navigation.navigate(routeName)} >
        <Spacer>
            <Text style={styles.link}>{title}</Text>
        </Spacer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
      }
})

export default NavLink