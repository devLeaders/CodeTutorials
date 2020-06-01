enum Type {
    CHANGE_TYPE = 'CHANGE_TYPE'
}

export const changeType = (type:any) => {
    return {
        type: Type.CHANGE_TYPE,
        payload: type,
    }
};