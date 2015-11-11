var request = require('supertest');
request = request('http://localhost:' + process.env.PORT);

describe("app", function () {

  it("should have an html home page", function () {
    request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

  });

  it("should have an html admin page", function () {
    request
      .get('/admin')
      .expect('Content-Type', /html/)
      .expect(200);
  });

});
