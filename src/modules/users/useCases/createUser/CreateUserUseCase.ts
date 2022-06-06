import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailAreadyExists = this.usersRepository.findByEmail(email)
    if(emailAreadyExists){
      throw new Error("User Already Exits")
    }
    const user = this.usersRepository.create({email, name});
    
    return user;
  }
}

export { CreateUserUseCase };
