import React from 'react'
import {TodoInput, TodoList } from 'todos/now'

import { Link } from 'react-router-dom'

import {Provider} from 'react-redux'

import {store} from '../../store'

const Schedule = () => {
    return (<>
        <Provider store={store}>
        <TodoInput/>
        <TodoList/>
        </Provider>
    </>)
}
export default Schedule