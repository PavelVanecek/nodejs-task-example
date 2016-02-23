var express = require('express')
var jsonAppender = require('./json-appender')
var fs = require('fs')

// TODO: make the filename configurable
var FILENAME = 'data/track.json'

var app = express()

app.get('/track', function(req, res, next) {
  jsonAppender(fs, FILENAME, req.query, function(err) {
    if (err) {
      console.error(err)
      return res.status(500).send('Something is wrong. Sorry!')
    }
    res.status(200).send('Saved.')
  })
})

module.exports = app
