import React from "react";
import { DataNotifi } from "./NotificationType";

interface NotyficationContextType {
  type : string,
  data : DataNotifi,
  token : string
}

export const initialState : NotyficationContextType = {
  type: '',
  data:{
      id:''
  },
  token : ''
}

export const NotyficationContext = React.createContext ({
    state: initialState,
    dispatch:(action)=>{}
});


