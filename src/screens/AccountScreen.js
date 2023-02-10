import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {Button, Text} from '@rneui/base';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text h4>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
