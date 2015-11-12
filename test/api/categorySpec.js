var request = require("supertest");
request = request('http://localhost:' + process.env.PORT);

describe("Category", function () {

  ////////////////////////////////////////////////////////
  // Collection
  ////////////////////////////////////////////////////////
  
  it("should GET full list of categories", function () {
    request
      .get("/api/categories")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        return ! "error" in res.body;
      })
      .expect(200);
  });

  it("should GET a full list of categories (json) for singular", function () {
    request
      .get("/api/category")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        return ! "error" in res.body;
      })
      .expect(200);
  });

  //test router regex
  it("should 404 for incorrect categories spelling", function () {
    request
      .get("/api/categorys")
      .expect(404);
  });

  ////////////////////////////////////////////////////////
  // Article
  ////////////////////////////////////////////////////////
  it("should return an error json object for incorrect id", function () {
    request
      .get("/api/category/aaaaaa")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        return "error" in res.body;
      })
      .expect(200);
  });

});