import { inject, injectable } from "tsyringe";

import { IUsersRepositoryDTO } from "../../dtos/IUsersRepositoryDTO";

interface IRequest {
  email: string;
  password: string;
}

@injectable
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepositoryDTO,
  ) {}

  async execute({ email, password }: IRequest) {
    // Usuário existe
    // Senha está correta
    // Gerar jsonwebtoken
  }
}

export { AuthenticateUserUseCase };
