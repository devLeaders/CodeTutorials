import React, { useReducer } from "react"
import { notificationReducer } from "./context/NotificationReducer"
import { initialState, NotyficationContext } from "./NotificationsStore"

export const NotificationStoreProvider = (props) => {
    const [state, dispatch ] = useReducer(notificationReducer, initialState)
    return (
          <NotyficationContext.Provider value={{state,dispatch}}>
            {props.children}
          </NotyficationContext.Provider>
    )
  }