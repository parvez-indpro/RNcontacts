import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as rn from '../constants/routeName';
import Contacts from '../screens/Contacts';

const ContactDetail =()=>{
    return(
        <View>
            <Text>Contacts</Text>
        </View>
    )
}

const CreateContact =()=>{
    return(
        <View>
            <Text>CreateContact</Text>
        </View>
    )
}

const Settings =()=>{
    return(
        <View>
            <Text>Settings</Text>
        </View>
    )
}

const HomeNavigator = () => {

    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={rn.CONTACT_LIST}>
            <HomeStack.Screen name={rn.CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={rn.CONTACT_DETAILS} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={"CreateContact"} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={"Settings"} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});

export default HomeNavigator;
