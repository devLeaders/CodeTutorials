import React, { useContext, useEffect } from "react";
import { NotyficationContext } from "./NotificationsStore";
import messaging from '@react-native-firebase/messaging';
import { setToken, addMesage } from "./NotificationAction";

export const useNotificationAction = () => {
    const {state, dispatch} = useContext(NotyficationContext)
 
    useEffect(() => {
      messaging().getToken().then(fcmToken => { 
        dispatch(setToken(fcmToken))
      });
      
      messaging().setBackgroundMessageHandler(async (remoteMessage:any) => {
          dispatch(addMesage(remoteMessage))
        }
      );

    }, []);
}