import * as types from "./CartConstants"

export function addToCart(payload) {
    return {
        type: types.ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: types.REMOVE_FROM_CART,
        payload
    }
}