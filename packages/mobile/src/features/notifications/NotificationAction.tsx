import { ContextType } from "./context/ContextType"

export const setToken = (fToken) => {
    return {
      type: ContextType.SET_TOKEN,
      payload : {
          fireBaseToken : fToken
      }
    }
  }
  
  export const addMesage = (remoteMessage) => {
    return {
      type : ContextType.ADD_MSG,
      payload : {
        notificationType : remoteMessage.data?.type,
        data : JSON.parse(remoteMessage.data?.data)
      }
    }
  }