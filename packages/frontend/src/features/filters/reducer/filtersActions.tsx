import {Actions} from "./types"

export function addCategorie(payload: string): any {
    return {
        type: Actions.ADD_CATEGORIE,
        payload
    }
}

export function removeCategorie(payload: Array<string>): any {
    return {
        type: Actions.REMOVE_CATEGORIE,
        payload
    }
}