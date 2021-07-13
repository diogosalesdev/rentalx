import { User } from "../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";

interface IUsersRepositoryDTO {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepositoryDTO };
