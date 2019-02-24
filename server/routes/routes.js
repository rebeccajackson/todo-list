const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.use(express.json())

router.get('/', (req, res) => {
  db.getAllTodos()
  .then(todos => {
    res.json(todos)
  })
})