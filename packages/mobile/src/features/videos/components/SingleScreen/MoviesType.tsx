export type MoviesListSimpleType = {
    id: string,
    uri: string
}

export type MoviesListExpandedType = {
    id: string,
    uri: string,
    title: string,
    like: string
}

export type MovieDescript = {
    id: string,
    name: string,
    kind: string,
    runtime: string
}