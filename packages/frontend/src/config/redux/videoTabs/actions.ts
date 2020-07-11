export enum Actions {
    SET_ACTIVE_TAB = "set active tab",
    SET_DEFAULT_TAB = "set default tab"
}


export const setActiveTab = (activeTab: string) => {
    return{
        type: Actions.SET_ACTIVE_TAB,
        payload: activeTab
    }
}


export const setDefaultTab = () => {
    return{
        type: Actions.SET_DEFAULT_TAB
    }
}