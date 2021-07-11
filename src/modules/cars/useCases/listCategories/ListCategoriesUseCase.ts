import { inject, injectable } from "tsyringe";

import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";
import { Category } from "../../entities/Category";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepositoryDTO,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
