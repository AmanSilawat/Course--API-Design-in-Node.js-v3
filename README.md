# Course--API-Design-in-Node.js-v3

Course Reference [frontendmasters.com](https://frontendmasters.com/courses/api-design-nodejs-v3/)

## Introduction
### What is an API
API is the acronym for **Application Programming Interface**, Usually a server on some remote machine that talk how another application can interact with with some data
Basic data operations like, Create, Read, Update, Destroy (CRUD). Basic data operations like, Create, Read, Update, Destroy (CRUD)

### MongoDB
MongoDB is a non-relational DB, easy to use. Data store as a JSON. Open source

## Express

### lesson 1

Goto lesson directory and run this command to run the server.
```bash
npm run dev
```

<br />

#### Custom Middleware

This is a `server.js` file.
```js
const log = (req, res, next) => {
    console.log('logging');
    next();
}

app.get('/data', [log, log, log], function GetData(req, res) {
    res.send({ data: [1, 2, 3] });
});
```

When will requesting data then three time print logging on the server side.

<br />

**Make a Error in the log**
This is a `server.js` file.
```js
const log = (req, res, next) => {
    console.log('logging');
    next(new Error('yes'));
}

app.get('/data', [log, log, log], function GetData(req, res) {
    res.send({ data: [1, 2, 3] });
});
```

Both side show a error show a error.

<br />

**Set req.body in the log**
This is a `server.js` file.
```js
const log = (req, res, next) => {
    console.log('logging');
    req.mydata = 'hello';
    next();
}

app.get('/data', [log, log, log], function GetData(req, res) {
    res.send({ data: req.mydata });
});
```

<br />

Return a object.
```json
{
  "data": "hello"
}
```

<br />

#### Route matching types

- exact matching `/users`
- parameter matching `/user/:id`
- glob matching `/customer/*`
- regex matching `^(cus)`

<br />

### Router & Sub Routes Simple Example

```js
const router = express.Router()

router.get('/me', function routerGet(req, res) {
    res.send({ me: 'hello' });
});

app.use('/api', router);
```

<br />

Hit the url.
```http
localhost:3000/api/me
```

<br />

output
```json
{
  "me": "hello"
}
```

<br />

### Router & Sub Routes Main Example

```js
const router = express.Router()

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
```