export enum PopUpsActions {
    SET_POPUP_ACTIVE = "setPopUpActive",
    DISMISS_POPUP = "dismissPopUp",
    CLEAR_POPUPS_DATA = "clearPopUpsData",
}

export type PopUpsActionType =
    | {type: PopUpsActions.SET_POPUP_ACTIVE, payload: PopUpData}
    | {type: PopUpsActions.DISMISS_POPUP, payload: PopUpData}
    | {type: PopUpsActions.CLEAR_POPUPS_DATA, payload: any}


interface PopUpData {
    name: string;
}


export const setPopUpActive = (data: PopUpData) => {
    return {
        type: PopUpsActions.SET_POPUP_ACTIVE,
        payload: data
    }
}

export const dismissPopUp = (data: PopUpData) => {
    return {
        type: PopUpsActions.DISMISS_POPUP,
        payload: data
    }
}

export const clearPopupsData = () => {
    return {
        type: PopUpsActions.CLEAR_POPUPS_DATA
    }
}