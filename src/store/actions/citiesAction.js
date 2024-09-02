export const REMOVE_CITY = 'REMOVE_CITY';
export const SET_CITY = 'SET_CITY';

export function removeCity(index) {
    return {
        type: REMOVE_CITY,
        payload: index
    }
}

export function addCity(movie) {
    return {
        type: SET_CITY,
        payload: movie
    }
}