var app = require('./app')
var assert = require('chai').assert

describe('app', function() {
  it('should have a `listen` function', function() {
    assert.isFunction(app.listen)
  })
})
