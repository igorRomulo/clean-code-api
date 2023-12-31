import { type Controller, type httpRequest, type httpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: httpRequest): Promise<httpResponse> {
    await this.controller.handle(httpRequest)
    return null
  }
}
