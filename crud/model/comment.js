const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    articlesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Articles',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Comments', CommentSchema)
