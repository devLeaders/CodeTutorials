import { useReducer } from "react";
import React from "react";

export const NotyficationContext = React.createContext({
    state:{
        type:{},
        data:{}
    },
    dispatch:(action)=>{}
});

const reducer = (state, action) => {
    console.log('state', state)
    console.log('action', action)
  switch (action.type) {
    case 'ADD_MSG' :
      return {
        ...state,
        type : action.payload.notificationType,
        date : action.payload.data
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

