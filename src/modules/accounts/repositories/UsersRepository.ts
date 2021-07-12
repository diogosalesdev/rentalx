import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepositoryDTO } from "../dtos/IUsersRepositoryDTO";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepositoryDTO {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    password,
    drive_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      drive_license,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
