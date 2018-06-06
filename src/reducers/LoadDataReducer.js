import { DATA_LOADED } from '../actions/ActionTypes'
import { decode } from '../base64Utf8Decoder'

export default (state = { jsonData: null }, action) => {
    switch (action.type) {
        case DATA_LOADED:
            return { ...state, jsonData: action.payload.jsonData };
        default:
            return state;
    }
}