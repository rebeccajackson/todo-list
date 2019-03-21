import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from '../containers/Home'
import Nav from './Nav'
import Completed from '../containers/Completed'
import Priority from '../containers/Priority'
import Category from '../containers/Category'
import NewTodo from '../containers/NewTodo'

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/completed'  component={Completed} />
        <Route path='/category/:category' component={Category} />
        <Route path='/priority/:priority' component={Priority} />
        <Route path='/add/:priority' component={NewTodo} />
      </div>
    </Router>
   
  )
}
