var appender = require('./json-appender')
var assert = require('chai').assert
var mock = require('mock-fs')

var emptyFSMock = mock.fs()
var existingFSMock = mock.fs({
  'myfilename.json': '[{"first":"object1"},{"second":"object2"}]'
})

var filename = 'myfilename.json'

describe('JSON appender', function() {
  it('should be a function', function() {
    assert.isFunction(appender)
  })

  describe('with no data available', function() {
    it('should save new array', function(done) {
      appender(emptyFSMock, filename, { foo: 'bar' }, function(err) {
        assert.isNull(err)
        emptyFSMock.readFile(filename, 'utf8', function(err, actual) {
          assert.isNull(err)
          var expected = '[{"foo":"bar"}]'
          assert.equal(actual, expected)
          done()
        })
      })
    })
  })

  describe('with existing data', function() {
    it('should append to that array', function(done) {
      appender(existingFSMock, filename, { foo: 'bar' }, function(err) {
        assert.isNull(err)
        existingFSMock.readFile(filename, 'utf8', function(err, actual) {
          assert.isNull(err)
          done()
        })
      })
    })
  })

})
