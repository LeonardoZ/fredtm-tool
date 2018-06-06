import { combineReducers } from 'redux'
import OperationReducer from './OperationReducer'
import LoadDataReducer from './LoadDataReducer'

const rootReducer = combineReducers({
    operationTree: OperationReducer,
    loadDataTree: LoadDataReducer
});

export default rootReducer;