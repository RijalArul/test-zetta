const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 3000
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) throw err
    console.log('Connected to MongoDB!!!')
  }
)

app.listen(() => {
  console.log(`App is listening on port ${PORT}`)
})
