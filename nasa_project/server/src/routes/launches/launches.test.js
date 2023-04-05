const request = require('supertest');
const app = require('../../app');
const { mongoConnect, mongoDisconnect } = require('../../services/mongo');

describe('Launches API', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async ()=>{
    await mongoDisconnect();
  })

  describe('Test GET /launches', () => {
    test('It should respond with 200 sucess', async () => {
      const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200); //we can use this istead of 🔽
      // expect(response.statusCode).toBe(200);
    });
  });

  describe('Test POST /launches', () => {
    const completeLaunchData = {
      mission: 'USS EnterPrise',
      rocket: 'NCC 17010-D',
      target: 'Kepler-62 f',
      launchDate: 'January 4,2028',
    };

    const launchDataWithOutDate = {
      mission: 'USS EnterPrise',
      rocket: 'NCC 17010-D',
      target: 'Kepler-62 f',
    };

    const launchDataWithInvalidDate = {
      mission: 'USS EnterPrise',
      rocket: 'NCC 17010-D',
      target: 'Kepler-62 f',
      launchDate: 'zoot',
    };

    test('It should respond with 201 sucess', async () => {
      const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201);

      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();
      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDataWithOutDate);
    });

    test('it should catch missing required properties', async () => {
      const response = await request(app)
        .post('/launches')
        .send(launchDataWithOutDate)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: 'Missing required launch property',
      });
    });

    test('it should catch invalid dates', async () => {
      const response = await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: 'Invalid launch Date',
      });
    });
  });
});
