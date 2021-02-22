const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const router = express.Router()

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))


const controller = (req, res) => {
    res.json({ message: 'delete' })
}

router
    .route('/')
    .get(controller)
    .post(controller)

router
    .route('/:id')
    .get(controller)
    .put(controller)
    .delete(controller)

app.use('/api/item', router);

app.listen(3000, () => {
    console.log(`REST API on http://localhost:${3000}/api`)
})