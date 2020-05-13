import * as types from "../actions/actionTypes"

const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload.product

                ]
            }
        case types.REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.filter(product => {
                    return product.id !== action.payload.id
                })
            }
        default:
            return state;
    }
}
