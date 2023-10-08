import resquest from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await resquest(app)
      .post('/api/signup')
      .send({
        name: 'Igor',
        email: 'igor.romulo.santos@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
