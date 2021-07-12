import { ICreateUserDTO } from "./ICreateUserDTO";

interface IUsersRepositoryDTO {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepositoryDTO };
