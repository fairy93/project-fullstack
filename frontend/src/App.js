import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { Login, SignUp, UserDetail, UserEdit,UserList  } from 'user'
import { Home, User, Counter, Todos} from './templates'
import {Schedule} from 'todos/containers'
import { Nav } from 'common'
import { BrowserRouter as Router } from 'react-router-dom'
import { todoReducer } from './store'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
const rootReducer = combineReducers({todoReducer})

const App = () => {
  return (<div>
    <Router>
      <Provider store = {createStore(rootReducer)}>
        <Nav/>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/counter' component={Counter}/>
        <Route exact path='/user' component={User}/>
        <Route exact path='/todos' component={Todos}/>

        <Route exact path='/schedule' component={Schedule}/>

        <Route exact path='/login-form' component={Login}/>
        <Route exact path='/signup-form' component={SignUp}/>
        <Route exact path='/user-detail' component={UserDetail}/>
        <Route exact path='/user-modify' component={UserEdit}/>
        <Route exact path='/user-remove' component={UserList}/>
        
      </Provider>
    </Router>
  </div>)
}

export default App