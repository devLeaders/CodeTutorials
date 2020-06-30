export interface FiltersState {
    categories: Array<any>;
    searchPhrase: string;
}

export enum Actions {
    SET_CATEGORIES = "SET_CATEGORIES",
    SET_SEARCH_PHRASE = "set_search_phrase"
}
