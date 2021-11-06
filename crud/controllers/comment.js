const Article = require('../model/articles')
const Comment = require('../model/comment')

class CommentController {
  static async findAll (req, res) {
    try {
      const comments = await Comment.find()
      res.status(200).json(comments)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async create (req, res) {
    try {
      const article = await Article.findById(req.body.articleId)
      if (article) {
        const result = await new Comment(req.body)
        await result.save()
        res.status(201).json(result)
      } else {
        throw { name: 'Article_Not_Found' }
      }
    } catch (err) {
      if (err.name === 'Article_Not_Found') {
        res.status(404).json({
          message: 'Article Not Found'
        })
      } else {
        res.status(500).json(err)
      }
    }
  }

  static async delete (req, res) {
    try {
      await Comment.findByIdAndDelete(req.params.id)
      res.status(200).json({
        message: 'Comment has been deleted'
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async update (req, res) {
    try {
      await Comment.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        message: 'Comment has been updated'
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = CommentController
