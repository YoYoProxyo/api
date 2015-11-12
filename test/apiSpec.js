var request = require('supertest');
request = request('http://localhost:' + process.env.PORT);

describe("api", function () {

  it("should have an html index page", function () {
    request
      .get('/api')
      .expect('Content-Type', /html/)
      .expect(200);

  });

});
