import { ContextType } from "./ContextType"

export const notificationReducer = (state, action) => {
    switch (action.type) {
      case ContextType.ADD_MSG :
        return {
          ...state,
          notificationType : action.payload.notificationType,
          data : action.payload.data
        }
    }
    return state
  }