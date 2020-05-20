import * as types from "./FavoritesConstants"

const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_FAVORITES:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload.product

                ]
            }
        case types.REMOVE_FROM_FAVORITES:
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
