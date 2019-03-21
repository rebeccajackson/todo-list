
export const receiveTodos = (todos) => {
  return {
    type: 'RECEIVE_TODOS',
    todos
  }
}

export const showError = errMessage => {
  return {
    type: 'SHOW_ERROR',
    errMessage
  }
}