import React, { useReducer } from "react"
import { reducer } from "./context/ReducerContext"
import { initialState, NotyficationContext } from "./NotificationsStore"

export const NotificationStoreProvider = (props) => {
    const [state, dispatch ] = useReducer(reducer, initialState)
    
    return (
          <NotyficationContext.Provider value={{state,dispatch}}>
            {props.children}
          </NotyficationContext.Provider>
    )
  }