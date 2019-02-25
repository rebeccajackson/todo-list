import request from 'superagent'

import { receiveTodos,showError } from '../actions/index'

export function getAllTodos(){
  return dispatch => {
    return request.get('/api/v1')
    .then(res => {
      dispatch(receiveTodos(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}