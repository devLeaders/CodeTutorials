import React, { useContext, useEffect } from "react";
import { NotyficationContext } from "../../../../features/notifications/NotificationsStore";
import { NotificatonType } from "../../../../features/notifications/NotificationEnum";
import { NavigationName } from "../../../../config/routing/NavigationName";

interface useCaseNotificationP {
    navigation : any
}

export const useCaseNotification = (props:useCaseNotificationP) => {

const {state, dispatch} = useContext(NotyficationContext)

  useEffect(()=>{
    if(state.type) {
      switch (state.type) {
        case NotificatonType.NEW_VIDEO :
          props.navigation.navigate(NavigationName.SINGLEMOVIE,
            {movieId: state.data.id})
          break;
        case NotificatonType.NEW_PLAYLIST :
          props.navigation.navigate(NavigationName.MOVIELIST)
          break;
      }
    }
  },[state])
}