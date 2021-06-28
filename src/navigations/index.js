import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <SafeAreaView>
        <Text>Hello1234</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AppNavContainer;
