const app = require('../index.js').app;
const request = require("supertest");

const server = require('../index').server

describe('GET /', () => {

  it('should return 200 OK', (done) => {
      
    request(app)
      .get('/')
      .expect(200, done);
  });
});

