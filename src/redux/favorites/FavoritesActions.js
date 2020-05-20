import * as types from "./FavoritesConstants"

export function addToFavorites(payload) {
    return {
        type: types.ADD_TO_FAVORITES,
        payload
    }
}

export function removeFromFavorites(payload) {
    return {
        type: types.REMOVE_FROM_FAVORITES,
        payload
    }
}