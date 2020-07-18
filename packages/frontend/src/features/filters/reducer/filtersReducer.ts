import {Actions, FiltersState} from "./types"

const initState: FiltersState = {
    categories: [],
    searchPhrase: ""
}

export const filtersReducer = (state = initState, action: any) => {
    switch(action.type){
        case Actions.SET_CATEGORIES:
            return {...state, categories: action.payload}
        case Actions.SET_SEARCH_PHRASE:
            return {...state, searchPhrase: action.payload}
        default:
            return state;
    }
}