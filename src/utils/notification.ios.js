import PushNotification from "react-native-push-notification";

const showNotifications = (title,message) =>{
    PushNotification.localNotification({
        channelId: "channel-id",
        title: title, // (optional)
        message: message, // (required)

    });
}

const delayNotifications = (title,message)=>{
    PushNotification.localNotificationSchedule({
        channelId: "channel-id", // (required)
        title: title, // (optional)
        message: message, // (required)
        date: new Date(Date.now() + 60 * 100), // in 60 secs
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

        /* Android Only Properties */
        repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });
}

const cancelNotifications = ()=>{
    PushNotification.cancelAllLocalNotifications()
}

export {showNotifications, cancelNotifications, delayNotifications}
