const connection = require('./connection')

module.exports = {
  getAllTodos
}

function getAllTodos(testDb){
  const db = testDb || connection
  return db('todos')
  .select()
}