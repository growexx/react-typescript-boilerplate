import { loginAPI } from "../api";

describe('Check login api is working correctly', () => {
  test('loginAPI', async () => {
    const res = await loginAPI({ email: 'test@test.com', password: 'Test@123' });
    expect(res.status).toBe(1);
    expect(res.message).toBe('Successful login');
  });
});