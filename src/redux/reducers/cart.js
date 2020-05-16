import * as types from "../actions/actionTypes"

const initialState = {
    products: []
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            const existsInCart = state.products.find(item => item.id === action.payload.product.id);
            const newProducts = existsInCart
                ? state.products.map(product => {
                    if (product.id === action.payload.product.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        }
                    } else {
                        return product;
                    }
                })
                : [
                    ...state.products,
                    {
                        ...action.payload.product,
                        quantity: 1
                    }
                ];

            return {
                ...state,
                products: newProducts
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
