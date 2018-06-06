import { FILTER_OPERATION, FILTER_COLLECT } from './ActionTypes';

export function filterOperation(operation) {
    return {
        'type': FILTER_OPERATION,
        'payload': {
            operation: operation
        }
    }
}

export function filterCollect(collect, index) {
    return {
        'type': FILTER_COLLECT,
        'payload': {
            indexedCollect: { collect: collect, index: index }
        }
    }
}