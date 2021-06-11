import {createStore} from 'redux'
import todoReducer from './todoReducer'
export {default as todoReducer} from './todoReducer'
export const store = createStore(TodoReducer)
