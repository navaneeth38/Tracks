import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Text, Button, Input } from '@rneui/base'
import Spacer from './Spacer'
import NavLink from './NavLink'

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonTitle, textTitle,routeName}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text h4>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        placeholder="abc@email.com"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        placeholder="password"
        value={password}
        autoCorrect={false}
        secureTextEntry
        keyboardType="numbers-and-punctuation"
        onChangeText={text => setPassword(text)}
      />
      {errorMessage ? <Text style={styles.wrong}>{errorMessage}</Text> : <Spacer />}
      
      <Button
        title={buttonTitle}
        onPress={() =>onSubmit({ email, password}) }
      />
      <NavLink title={textTitle} routeName={routeName} />
    </>
  )
}

const styles = StyleSheet.create({
    wrong: {
      color: 'red',
      fontSize: 16,
      marginLeft: 15,
      marginBottom: 8
    }
  });

export default AuthForm