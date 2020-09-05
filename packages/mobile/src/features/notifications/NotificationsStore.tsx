import { useReducer } from "react";
import React from "react";
import { DataNotifi } from "./NotificationType";
import { ContextType } from "./NotificationEnum";

interface NotyficationContextType {
  state : {
    type : string,
    data : DataNotifi,
  },
  dispatch: (action: object) => void
}

export const NotyficationContext = React.createContext<NotyficationContextType> ({
    state:{
        type: '',
        data:{
            id:''
        }
    },
    dispatch:(action)=>{}
});

const reducer = (state, action) => {
  switch (action.type) {
    case ContextType.ADD_MSG :
      return {
        ...state,
        type : action.payload.notificationType,
        data : action.payload.data
      }
  }
  return state
}
const initialState = { }
export const NotificationStore = (props) => {
  const [state, dispatch ] = useReducer(reducer, initialState)
  return (
        <NotyficationContext.Provider value={{state,dispatch}}>
          {props.children}
        </NotyficationContext.Provider>
  )
}

