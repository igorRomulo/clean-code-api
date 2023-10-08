import resquest from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default tupe as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send()
    })

    await resquest(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })
})
