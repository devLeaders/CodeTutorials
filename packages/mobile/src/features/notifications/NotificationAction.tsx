import React, { useContext, useEffect } from "react";
import { NotyficationContext } from "./NotificationsStore";
import { ContextType } from "./context/ContextType";
import messaging from '@react-native-firebase/messaging';

export const useNotificationAction = () => {
    const {state, dispatch} = useContext(NotyficationContext)
 
    useEffect(() => {
      messaging().getToken().then(fcmToken => { 
        if (fcmToken) {
          return fcmToken
        } 
      });
      
      messaging().setBackgroundMessageHandler(async (remoteMessage:any) => {
        const action = {
          type : ContextType.ADD_MSG,
          payload : {
            notificationType : remoteMessage.data?.type,
            data : JSON.parse(remoteMessage.data?.data)
          }
        }
          dispatch(action)
        }
      );

    }, []);
}