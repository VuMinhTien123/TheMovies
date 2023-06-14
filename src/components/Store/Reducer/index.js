import {combineReducers} from 'redux'
import reducerMovies from './ReducerMovies'

const rootReducer = combineReducers({
    inforMovies : reducerMovies
});

export default rootReducer;