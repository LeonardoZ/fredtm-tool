import { DATA_LOADED } from '../actions/ActionTypes'

export default (state = { jsonData: null }, action) => {
    switch (action.type) {
        case DATA_LOADED:
            return { ...state, jsonData: action.payload.jsonData };
        default:
            return state;
    }
}