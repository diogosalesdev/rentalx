import { container } from "tsyringe";

import { ICategoriesRepositoryDTO } from "../../modules/cars/dtos/ICategoriesRepositoryDTO";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";

container.registerSingleton<ICategoriesRepositoryDTO>(
  "CategoriesRepository",
  CategoriesRepository,
);
