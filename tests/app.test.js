const request = require('supertest');
const app = require('../app');

test('GET / debe devolver la página principal', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
});