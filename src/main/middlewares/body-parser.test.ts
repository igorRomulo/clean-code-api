import resquest from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await resquest(app)
      .post('/test_body_parser')
      .send({ name: 'Igor' })
      .expect({ name: 'Igor' })
  })
})
