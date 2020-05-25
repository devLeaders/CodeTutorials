import {Actions, FiltersState} from "./types"

const initState: FiltersState = {
    categories: []
}

export const filtersReducer = (state = initState, action: any) => {
    console.log(action.type)
    switch(action.type){
        case Actions.SET_CATEGORIES:
            return state
        default:
            return state;
    }
}