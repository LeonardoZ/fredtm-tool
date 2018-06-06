import { DATA_LOADED, FILTER_OPERATION, FILTER_COLLECT, UNLOAD } from '../actions/ActionTypes';
import { decode } from '../base64Utf8Decoder'

const importError = {
    error: {
        message: "Failed to recognize data in JSON file"
    }
}
const initialData = {
    selectedOperation: null,
    selectedCollect: null,
    collectIndex: 0,
    operations: [],
    activities: [],
    collects: [],
    times: [],
    error: null,
    loaded: false
}

export default (state = initialData , action) => {
    switch (action.type) {
        case DATA_LOADED:
            try {
                let jsonData = decode(action.payload.jsonData.substring(29))
                let parsed = JSON.parse(jsonData)
                return parseDataLoaded(state, parsed)
            } catch (error) {
                return { ...state, loaded: false, error: importError.error }
            }
        case FILTER_OPERATION:
            return { ...state, selectedOperation: action.payload.operation }
        case FILTER_COLLECT:
            return {
                ...state,
                selectedCollect: action.payload.indexedCollect.collect,
                collectIndex: action.payload.indexedCollect.index
            }
        case UNLOAD:
            return initialData    
        default:
            return state;
    }
}
function parseDataLoaded(state, jsonData) {
    let operations = [];
    let activities = [];
    let collects = [];
    let times = []
    try {
        let mappedOperations = jsonData.forEach((operation, operationIdx) => {
            operation.activities.forEach((activity, activityIdx) => {
                activities.push({ ...activity, filterId: activityIdx, operationIdx: operationIdx });
            });

            operation.collects.forEach((collect, collectIdx) => {
                collect.times.forEach((time, timeIdx) => {
                    delete time.pics
                    times.push({ ...time, filterId: timeIdx, collectIdx: collectIdx })
                })

                delete collect.activities
                delete collect.times
                collects.push({ ...collect, filterId: collectIdx, operationIdx: operationIdx })
            })

            delete operation.activities
            delete operation.collects

            operations.push({ ...operation, filterId: operationIdx })
        });
        return {
            selectedOperation: operations[0], // dev
            operations: operations,
            activities: activities,
            collects: collects,
            times: times,
            error: null,
            loaded: true
        }

    } catch (error) {
        return {
            ...state,
            loaded: false,
            error: importError.error
        }
    }
}