import {combineReducers} from 'redux'

import pizzasReducer from './pizzas'
import filtersReducer from './filters'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
})

export default rootReducer;