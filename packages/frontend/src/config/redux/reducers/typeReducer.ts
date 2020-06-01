interface InitialState {
    navBarType: any;
};

const initialState: InitialState = {
    navBarType: 'filters'
}

export const typeReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case 'CHANGE_TYPE':
            return {navBarType: action.payload }
        default:
            return state;
    }
};