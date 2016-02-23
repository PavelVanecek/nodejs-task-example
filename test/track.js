var supertest = require('supertest')
var app = require('../src/app')

describe('/track', function() {
  it('should return 200', function(done) {
    supertest(app)
      .get('/track')
      .expect(200)
      .end(done)
  })
})
