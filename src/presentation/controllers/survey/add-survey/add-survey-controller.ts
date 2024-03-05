import { type Controller, type HttpRequest, type HttpResponse, type AddSurvey, type Validation } from './add-survey-controller-protocols'
import { badRequest, noContent, serverError } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)
      await this.addSurvey.add(httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(new Error())
    }
  }
}
