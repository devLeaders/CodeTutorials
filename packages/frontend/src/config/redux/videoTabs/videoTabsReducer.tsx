import {Actions} from "./actions"

export enum Tabs {
    DESCRIPTION = "Description",
    TASKS = "tasks",
    NOTES = "notes"
}

const initState = {
    activeTab: Tabs.DESCRIPTION
}

export const videoTabsReducer = (state = initState, action: {type:Actions, payload: any}) => {
    const {type, payload} = action
    switch (type){
        case Actions.SET_ACTIVE_TAB:
            return {activeTab: payload}
        case Actions.SET_DEFAULT_TAB:
            return {activeTab: "Description"}
        default:
            return state
    }
}