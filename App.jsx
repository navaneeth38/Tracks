import AccountScreen from "./src/screens/AccountScreen";
import React, { useContext } from 'react'
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { Context as AuthContext, Provider as AuthProvider} from "./src/context/AuthContext";
import { navigationRef } from "./src/navigationRef";
import LoadingScreen from "./src/screens/LoadingScreen";
import BottomTabNavigator from "./src/components/BottomTabNavigator";



const App = () => {
  const Stack = createNativeStackNavigator()
  const {state} = useContext(AuthContext)
  const token = state.token
  console.log(token)
  // const Tab = createBottomTabNavigator()
  return (
   <NavigationContainer ref={navigationRef}>
     <Stack.Navigator screenOptions={{
      headerShown: false
     }}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ animation: 'none'}} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ animation: 'none'}} />
      <Stack.Screen name="TrackCreate" component={TrackCreateScreen} options={{ animation: 'none'}} />
      <Stack.Screen name="TrackList" component={BottomTabNavigator} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default () =>{
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

//add nav link for transition btw sigin and sign up