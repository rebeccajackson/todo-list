import React from 'react'
import { connect } from 'react-redux'

import { getAllTodos } from '../api/todos'

export class Home extends React.Component {

  componentDidMount(){
    this.props.getAllTodos()
  }
  
  render(){
    const { todos } = this.props
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

const mapDispatchToProps = dispatch => {
  return {getAllTodos: dispatch(getAllTodos())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)