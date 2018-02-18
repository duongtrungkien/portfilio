import {combineReducers} from 'redux'
import work from './work'
import skill from './skill'

const rootReducer = combineReducers({
    work,
    skill,
});

export default rootReducer