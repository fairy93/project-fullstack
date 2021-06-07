import React from 'react'
import { Route } from "react-router-dom"
import {Login, SignUp, UserEdit, UserDetail, UserList} from 'user/index'
import {Counter} from 'counter/index';
import {Home} from 'common/index'

const App = () => {
  return (<div>
      <Route exact path ='/' component={Home}/>
      <Route exact path='/counter' component={Counter}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/user-detail' component={UserDetail}/>
      <Route exact path='/user-edit' component={UserEdit}/>
      <Route exact path='/user-list' component={UserList}/>
  </div>)
}

export default App