import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

interface ICategoriesRepositoryDTO {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepositoryDTO };
