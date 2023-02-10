import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const {state, signup, clearErrorMessage,tryLocalSignin} = useContext(AuthContext);
  const navigation = useNavigation()
  useEffect(() => {
    const listener = navigation.addListener('focus', ()=> clearErrorMessage())
         //return
  }, [])


  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonTitle="Sign Up"
        textTitle="Already have an account ?"
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
});

export default SignupScreen;
