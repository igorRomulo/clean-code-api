import { type httpRequest, type httpResponse } from '../protocols/http'

export interface Controller {
  handle: (httpRequest: httpRequest) => httpResponse
}
