import { PopUpsActionType, PopUpsActions } from "./popUpsActions";

const initState = {
  user: false,
  alerts: false,
  teams: false,
  x: false,
  y: false,
};

export const popUpsReducer = (state = initState, action: PopUpsActionType) => {
  const { type, payload } = action;
  switch (type) {
    case PopUpsActions.SET_POPUP_ACTIVE:
      return { ...state, [payload.name]: true };
    case PopUpsActions.DISMISS_POPUP:
      return { ...state, [payload.name]: false };
    case PopUpsActions.CLEAR_POPUPS_DATA:
      return { ...initState };
    default:
      return state;
  }
};
