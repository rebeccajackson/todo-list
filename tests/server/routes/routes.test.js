import request from 'supertest'

const db = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getAllTodos: jest.fn()
  //TODO add other routes to test here
}))


test('GET / loads all todos', () => {
  let expected = [{
    0: {
      id:1,
      task: 'Test Home',
      category: 'Study' 
    },
    1: {
      id:2,
      task: 'Test App',
      category: 'Study' 
    }
  }]

  db.getAllTodos.mockImplementation(() => Promise.resolve(expected))

  return request(server).get('/api/v1')
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})