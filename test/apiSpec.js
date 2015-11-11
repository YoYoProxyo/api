var request = require('supertest');
request = request('http://localhost:3000');

describe("api", function () {

  it("should have an html index page", function () {
    request
      .get('/api')
      .expect('Content-Type', /html/)
      .expect(200);

  });

  it("should return category json", function () {
    request
      .get('/api/category')
      .expect('Content-Type', /json/)
      .expect(200);
  });

});
