const request = require('supertest');
const chai = require('chai');
const app = require('../app');
const expect = chai.expect

describe('GET /properties', () => {
    it('should return property records', async () => {
      const response = await request(app).get('/api/all-property-details');
      expect(response.statusCode).to.be.eql(200);
    });
  });

  describe('GET /User-Data', () => {
    it('should return user data', async () => {
      const response = await request(app).get('/api/user-data');
      expect(response.statusCode).to.be.eql(200);
    });
  });
  describe('GET /Reviews', () => {
    it('should return property reviews', async () => {
      const response = await request(app).get('/api/get-reviews');
      expect(response.statusCode).to.be.eql(200);
    });
  });
//   describe('GET /id', () => {
//     it('should return next id', async () => {
//       const response = await request(app).get('/api/get-next-id');
//       expect(response.statusCode).to.be.eql(200);
//     });
//   });
