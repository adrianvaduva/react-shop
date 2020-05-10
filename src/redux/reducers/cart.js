const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newState = {
                ...state,
                products: [
                    ...state.products,
                    action.payload.product

                ]
            }
            return newState;

        default:
            return state;
    }
}
