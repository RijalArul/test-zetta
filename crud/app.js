const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ArticleController = require('./controllers/article')
const CommentController = require('./controllers/comment')

const PORT = 3000
require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
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

app.get('/articles', ArticleController.findAll)
app.post('/articles', ArticleController.create)
app.delete('/articles/:id', ArticleController.delete)
app.put('/articles/:id', ArticleController.update)

app.get('/comments', CommentController.findAll)
app.post('/comments', CommentController.create)
app.delete('/comments/:id', CommentController.delete)
app.put('/comments/:id', CommentController.update)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
