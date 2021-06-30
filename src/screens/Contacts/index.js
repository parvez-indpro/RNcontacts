import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {cancelNotifications, delayNotifications, showNotifications} from '../../utils/notification';
import PushNotification, {Importance} from 'react-native-push-notification';

const Contacts = () => {

    PushNotification.createChannel(
        {
            channelId: "channel-id", // (required)
            channelName: "My channel", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            playSound: false, // (optional) default: true
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );

    return (
        <View style={styles.container}>
            <Text>Push Notification12</Text>
            <TouchableOpacity activeOpactit={0.6} onPress={()=>showNotifications("Hello", "This is message")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>ClickTo get Notification</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpactit={0.6} onPress={()=>delayNotifications("Hello", "Delay Notification")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>ClickTo get Notification after 5 sec</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpactit={0.6} onPress={cancelNotifications()}>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Cancel Notification</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        padding: 16,
        backgroundColor: 'blue',
        borderRadius: 24,
    },
    buttonText:{
        color:'#6c9cf5',
    }
});

export default Contacts;


