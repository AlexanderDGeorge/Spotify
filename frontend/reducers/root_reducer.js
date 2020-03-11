import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors_reducer';
import queueReducer from './queue_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    queue: queueReducer,
});