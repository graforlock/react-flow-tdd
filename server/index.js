const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

let ideas = require('./ideas.json')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, OPTIONS, DELETE')
  next()
})

app.get('/api/ideas', (req, res) => {
  res.json(ideas)
})

app.post('/api/ideas/new', (req, res) => {
  const { body } = req
  body.id = ideas[ideas.length - 1].id + 1
  body.created_date = new Date()
  ideas.push(body)

  res.json(body)
})

app.patch('/api/ideas/update/:id', (req, res) => {
  const { body, params } = req
  const id = Number(params.id)

  const index = ideas.findIndex(idea => idea.id === id)
  if (ideas[index]) {
    ideas[index] = body

    res.send(body)
  }

  res.status(404)
  res.end()
})

app.delete('/api/ideas/delete/:id', (req, res) => {
  const { params } = req
  const id = Number(params.id)
  ideas = ideas.filter(idea => idea.id !== id)

  res.send({ id })
  res.end()
})

app.listen(8000)
