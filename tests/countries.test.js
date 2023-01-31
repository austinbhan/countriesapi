const { setupDb } = require('./utils');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(setupDb);
  // GET ALL
  it('#GET /countries should return a list of countries', async () => {
    const resp = await request(app).get('/countries');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1', country: 'United States', capitol: 'Washington DC', langue: 'English', continent: 'North America', population: 335999183 },
      { id: '2', country: 'United Kingdom', capitol: 'London', langue: 'English', continent: 'North America', population: 67081234 },
      { id: '3', country: 'India', capitol: 'New Dehli', langue: 'Hindi', continent: 'Asia', population: 1414940553 },
      { id: '4', country: 'Romania', capitol: 'Bucharest', langue: 'Romanian', continent: 'Europe', population: 18907736 },
      { id: '5', country: 'China', capitol: 'Beijing', langue: 'Chinese', continent: 'Asia', population: 1453629085 },
      { id: '6', country: 'Mexico', capitol: 'Mexico City', langue: 'Spanish', continent: 'Europe', population: 132150971 }
    ]);
  });
});
