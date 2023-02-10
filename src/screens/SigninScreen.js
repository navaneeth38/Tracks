import {View, StyleSheet} from 'react-native';
import React, { useContext, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';



const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);
  const navigation = useNavigation();

  
  useEffect(() => {
    const listener = navigation.addListener('focus', ()=> clearErrorMessage())
  }, [])
  
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonTitle="Sign In"
        textTitle="Don't have an account ?"
        routeName="Signup"
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

export default SigninScreen;
