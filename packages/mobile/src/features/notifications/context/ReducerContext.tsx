
import { ContextType } from "./ContextType"

export const reducer = (state, action) => {
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