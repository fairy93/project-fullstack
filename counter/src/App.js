import './App.css';
import React from 'react'
import {Counter} from './components/index';
import { Route } from "react-router-dom"
import {Todo} from './components/index'

const App = () => {
  return (<div>
    <Route exact path='/' component={Counter}/>
    <Route exact path='/todo' component={Todo}/>
  </div>)
}

export default App
// 파이썬객체 인스턴스
// 리택트 객체 컴포넌트
// 자바스크립트 객체 json
// 자바 인스턴스
// 컴포논트 (객체
//   )
// 함수형 훅
// 클래스 요즘안써