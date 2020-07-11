import {Actions, VideoTabsAction} from "./actions"


export enum Tabs {
    DESCRIPTION = "description",
    TASKS = "tasks",
    NOTES = "notes"
}

const initState = {
    activeTab: Tabs.DESCRIPTION
}

export const videoTabsReducer = (state = initState, action: VideoTabsAction) => {
    const {type, payload} = action
    switch (type){
        case Actions.SET_ACTIVE_TAB:
            return {activeTab: payload}
        case Actions.SET_DEFAULT_TAB:
            return {activeTab: Tabs.DESCRIPTION}
        default:
            return state
    }
}