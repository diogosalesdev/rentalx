import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO } from "./ICreateSpecificationDTO";

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository };
