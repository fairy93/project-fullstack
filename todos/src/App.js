import './App.css';
import React from 'react'
import { Route } from "react-router-dom"
import Schedule from 'containers/Schedule';

const App = () => {
  return (<Route exact path='/' component={Schedule}/>)
}

export default App