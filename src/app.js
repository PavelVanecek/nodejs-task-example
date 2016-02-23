var express = require('express')

var app = express()

app.get('/track', function(req, res, next) {
  console.warn('TODO: Implement this')
  res.status(500).send('Not yet implemented.')
})

module.exports = app
