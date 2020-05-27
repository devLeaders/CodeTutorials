export interface FiltersState {
    categories: Array<any>;
    searchPhrase: string;
}

export enum Actions {
    ADD_CATEGORIE = "add_categorie",
    REMOVE_CATEGORIE = "remove_categorie",
    SET_SEARCH_PHRASE = "set_search_phrase"
}
