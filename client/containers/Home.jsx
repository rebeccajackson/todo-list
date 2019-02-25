import React from 'react'
import { connect } from 'react-redux'

import { getAllTodos } from '../api/todos'

export class Home extends React.Component {

  componentDidMount(){
    this.props.dispatch(getAllTodos())
  }
  
  render(){
    const { todos } = this.props
    todos.map(todo => { console.log('i repeat', todo)})
    return (
      <div className='homepage'>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => 
            <li>{todo.task}</li>
          )}
        </ul>
       
      </div>
    )
  }
  
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

export default connect(mapStateToProps)(Home)