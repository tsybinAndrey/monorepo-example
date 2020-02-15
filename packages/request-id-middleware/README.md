# `request-id-middleware`

This middleware sets unique id to request
This can be used for logging and debugging requests

## Usage

```
const express = require('express')
const requestIdMiddleware = require('request-id-middleware');

const app = express()

app.use(requestIdMiddleware)

app.get('/', (req, res) => {
  const requestId = req.requestId
  res.status(200).send(`Request id = ${requestId}`)
})
```
