import {Actions} from "./Types"

export function addCategorie(payload: number): any {
    return {
        type: Actions.ADD_CATEGORIE,
        payload
    }
}

export function removeCategorie(payload: Array<number>): any {
    return {
        type: Actions.REMOVE_CATEGORIE,
        payload
    }
}

export function setSearchPhrase(payload: string): any {
    return {
        type: Actions.SET_SEARCH_PHRASE,
        payload
    }
}