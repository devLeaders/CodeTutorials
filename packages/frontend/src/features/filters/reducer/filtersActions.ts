import {Actions} from "./types"

export function setCategories(payload: Array<number>): any {
    return {
        type: Actions.SET_CATEGORIES,
        payload
    }
}


export function setSearchPhrase(payload: string): any {
    return {
        type: Actions.SET_SEARCH_PHRASE,
        payload
    }
}