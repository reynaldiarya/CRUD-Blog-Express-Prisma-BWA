const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const postRouter = require('./routes/PostRoutes.js')

app.use(bodyParser.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})