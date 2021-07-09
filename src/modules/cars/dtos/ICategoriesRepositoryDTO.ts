import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

interface ICategoriesRepositoryDTO {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepositoryDTO };
