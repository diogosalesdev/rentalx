import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";
import { Category } from "../../model/Category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepositoryDTO) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
