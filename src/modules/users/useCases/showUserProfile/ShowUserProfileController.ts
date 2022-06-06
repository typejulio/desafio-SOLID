import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui

    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({user_id})
      if(!user) {
        throw new Error("error show user profile")
      }
  
      return response.status(200).json(user);
    } catch(error) {
      response.status(404).json({error: `${error.message}`})
    }
  }
}

export { ShowUserProfileController };
