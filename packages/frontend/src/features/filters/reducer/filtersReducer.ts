import {Actions, FiltersState} from "./Types"

const initState: FiltersState = {
    categories: [],
    searchPhrase: ""
}

export const filtersReducer = (state = initState, action: any) => {
    console.log(action.type)
    switch(action.type){
        case Actions.ADD_CATEGORIE:
            return {...state, categories: [...state.categories, action.payload]}
        case Actions.REMOVE_CATEGORIE:
            return {...state, categories: action.payload}
        case Actions.SET_SEARCH_PHRASE:
            return {...state, searchPhrase: action.payload}
        default:
            return state;
    }
}