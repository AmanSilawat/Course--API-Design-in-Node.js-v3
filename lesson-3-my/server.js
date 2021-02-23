const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const userRouter = require('./resources/user/user.router');
const itemRouter = require('./resources/item/item.router');
const listRouter = require('./resources/list/list.router');

const app = express()

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017',)
}

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)

app.listen(3000, () => {
    console.log(`REST API on http://localhost:${3000}/api`)
})

// connect()
//     .then(async connection => {
//     })
//     .catch(e => console.error(e))