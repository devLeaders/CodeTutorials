export const asideTypeReducer = (state = 'filters', action:any) => {
    switch(action.type) {
        case 'CHANGE_TYPE':
            return action.payload;
        default:
            return state;
    }
};