import React from 'react'
import { connect } from 'react-redux'

export function Home ({ todos }) {
  return (
    <div className='homepage'>
      {todos.map(todo => {
        <li>{todo.task}</li>
      })}
    </div>
  )
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

export default connect(mapStateToProps, null)(Home)