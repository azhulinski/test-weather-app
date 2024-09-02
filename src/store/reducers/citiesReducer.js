import {REMOVE_CITY, SET_CITY} from '../actions/citiesAction.js';

export function citiesReducer(state = {cities: []}, action) {
    const clonedState = structuredClone(state.cities);
    switch (action.type) {
        case SET_CITY:
            clonedState.push(action.payload);
            return {
                ...state,
                cities: clonedState
            }
        case REMOVE_CITY:
            clonedState.splice(action.payload, 1);
            return {
                ...state,
                cities: clonedState
            }
        default:
            return state;
    }
}