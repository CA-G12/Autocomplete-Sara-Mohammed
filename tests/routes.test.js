const router = require('../src/router');
const supertest = require('supertest');

test('Test Home Routing', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('Test Css Routing', (done) => {
  supertest(router)
    .get('/public/style.css')
    .expect(200)
    .expect('Content-Type', /css/)
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('Test NotFound Routing', (done) => {
  supertest(router)
    .get('/dumyURL')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
});

test('Test search Route', (done) => {
  supertest(router)
    .get('/search/something')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
