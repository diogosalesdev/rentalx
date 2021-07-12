import { container } from "tsyringe";

import { IUsersRepositoryDTO } from "../../modules/accounts/dtos/IUsersRepositoryDTO";
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository";
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

container.registerSingleton<IUsersRepositoryDTO>(
  "UsersRepository",
  UsersRepository,
);
