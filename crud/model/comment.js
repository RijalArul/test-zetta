const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Articles'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Comments', CommentSchema)
