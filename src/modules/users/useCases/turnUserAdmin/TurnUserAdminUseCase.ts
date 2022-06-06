import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userAlreadyExists = this.usersRepository.findById(user_id)
    if(!userAlreadyExists) {
      throw new Error("User not exists")
    }

    const userAdmin = this.usersRepository.turnAdmin(userAlreadyExists)
    if(!userAdmin.admin) {
      throw new Error("USer not admin");
    }

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
