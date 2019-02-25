const testEnv = require('../setup-db')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('GET gets all the todos', () => {
  let expected = 3

  return db.getAllTodos(testDb)
  .then(todos => {
    let actual = todos.length

    expect(actual).toEqual(expected)
  })
})