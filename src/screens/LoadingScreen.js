import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect,useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'


const LoadingScreen = () => {
    const { tryLocalSignin}= useContext(AuthContext)
    useEffect(()=>{
        tryLocalSignin()
    },[])
  return (
    <ActivityIndicator color="black" size={40} style={{flex: 1, justifyContent: 'center'}} />
  )
}

export default LoadingScreen