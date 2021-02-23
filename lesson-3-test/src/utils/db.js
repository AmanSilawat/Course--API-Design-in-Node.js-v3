const mongoose = require('mongoose')
const options = require('../config/dev')

const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}

console.log(connect, 'db ----')
module.exports = connect
