import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Login =()=>{
  return(
      <View>
        <Text>Login</Text>
      </View>
  )
}

const SignUp =()=>{
  return(
      <View>
        <Text>SignUp</Text>
      </View>
  )
}


const AuhNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={"Login"} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={"Register"} component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AuhNavigator;
