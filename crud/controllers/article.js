const Article = require('../model/articles')

class ArticleController {
  static async findAll (req, res) {
    try {
      const articles = await Article.find()
      res.status(200).json(articles)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async create (req, res) {
    try {
      const result = await new Article(req.body)
      await result.save()
      res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async delete (req, res) {
    try {
      await Article.findByIdAndDelete(req.params.id)
      res.status(200).json({
        message: 'Article has been deleted'
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async update (req, res) {
    try {
      await Article.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        message: 'Article has been updated'
      })
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = ArticleController
