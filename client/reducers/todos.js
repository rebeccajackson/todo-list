const initialState = []

export function todos (state = initialState, action){
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.todos
      
    default:
      return state
  }
}