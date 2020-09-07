import React from "react";
import { DataNotifi } from "./NotificationType";

interface NotyficationContextType {
  state : {
    type : string,
    data : DataNotifi,
  },
  dispatch: (action: object) => void
}

export const initialState = {
  type: '',
  data:{
      id:''
  }
}

export const NotyficationContext = React.createContext<NotyficationContextType> ({
    state: initialState,
    dispatch:(action)=>{}
});


