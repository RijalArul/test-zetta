const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

//  mongoose.model('Products', productsSchema)

module.exports = mongoose.model('Articles', ArticleSchema)
