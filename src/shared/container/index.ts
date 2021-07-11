import { container } from "tsyringe";

import { ICategoriesRepositoryDTO } from "../../modules/cars/dtos/ICategoriesRepositoryDTO";
import { ISpecificationRepository } from "../../modules/cars/dtos/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/SpecificationsRepository";

container.registerSingleton<ICategoriesRepositoryDTO>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository,
);
