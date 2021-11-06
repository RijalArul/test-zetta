const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true
    },
    err => {
      if (err) {
        console.log(err)
      }
    }
  )
  console.log('Connect MongoDB')
}

module.exports = connectDB
