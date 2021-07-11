import { getRepository, Repository } from "typeorm";

import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../dtos/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({
      name,
    });

    return specification;
  }
}

export { SpecificationsRepository };
