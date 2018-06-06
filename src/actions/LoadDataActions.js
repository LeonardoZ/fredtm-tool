import { DATA_LOADED, UNLOAD } from './ActionTypes';

export function onDataLoaded(data) {
    localStorage.setItem('devdata', data)
    return {
        'type': DATA_LOADED,
        'payload': {
            jsonData: data
        }
    }
}

export function unloadData(collect, index) {
    return {
        'type': UNLOAD,
    }
}