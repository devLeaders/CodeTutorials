import {Actions, FiltersState} from "./types"

const initState: FiltersState = {
    categories: []
}

export const filtersReducer = (state = initState, action: any) => {
    console.log(action.type)
    switch(action.type){
        case Actions.ADD_CATEGORIE:
            return {categories: [...state.categories, action.payload]}
        case Actions.REMOVE_CATEGORIE:
                return {categories: action.payload}
        default:
            return state;
    }
}