var supertest = require('supertest')
var app = require('../src/app')
var mock = require('mock-fs')
var fs = require('fs') // will be mocked by mock-fs

describe('GET /track', function() {
  beforeEach(function() {
    mock({
      data: {
        'track.json': '[]'
      }
    })
  })
  afterEach(mock.restore)

  it('should save query params and return 200', function(done) {
    supertest(app)
      .get('/track?foo=bar')
      .expect(200)
      .end(function(err, res) {
        if (err) { return done(err) }
        fs.readFile('data/track.json', 'utf8', function(err, actual) {
          var expected = '[{"foo":"bar"}]'
          assert.equal(actual, expected)
        })
        done()
      })
  })
})

describe('POST /track', function() {
  it('should not listen on POST', function(done) {
    // this is on purpose; the app only listens on GET
    // there are pros and cons to this approach
    supertest(app)
      .post('/track')
      .expect(404)
      .end(done)
  })
})
