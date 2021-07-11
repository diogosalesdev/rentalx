import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO } from "./ICreateSpecificationDTO";

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
