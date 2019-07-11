import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
    // ui,
});




