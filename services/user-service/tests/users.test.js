const request = require('supertest');
const app = require('../server');

describe('User Service', () => {
  describe('POST /api/users/register', () => {
    it('should register a new user', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
      };

      const response = await request(app)
        .post('/api/users/register')
        .send(userData)
        .expect(201);

      expect(response.body.user).toHaveProperty('id');
      expect(response.body.user.email).toBe(userData.email);
    });
  });
});