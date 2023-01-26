const pool = require('../sql/pool');
const setup = require('../lib/data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  // GET ALL
  it('#GET /countries should return a list of countries', async () => {
    const resp = await request(app).get('/countries');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      { id: '1', country: 'United States', capitol: 'Washington DC', langue: 'English' },
      { id: '2', country: 'United Kingdom', capitol: 'London', langue: 'English' },
      { id: '3', country: 'India', capitol: 'New Dehli', langue: 'Hindi' },
      { id: '4', country: 'Romania', capitol: 'Bucharest', langue: 'Romanian' },
      { id: '5', country: 'China', capitol: 'Beijing', langue: 'Chinese' },
      { id: '6', country: 'Mexico', capitol: 'Mexico City', langue: 'Spanish' }
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
