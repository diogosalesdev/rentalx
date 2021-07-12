import { ICreateUserDTO } from "./ICreateUserDTO";

interface IUsersRepositoryDTO {
  create(date: ICreateUserDTO): Promise<void>;
}

export { IUsersRepositoryDTO };
