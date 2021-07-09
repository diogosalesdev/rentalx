import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";
import { Category } from "../../entities/Category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepositoryDTO) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
