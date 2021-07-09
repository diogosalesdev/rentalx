import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoriyUseCase = new CreateCategoryUseCase(
    categoriesRepository,
  );

  const createCategoryController = new CreateCategoryController(
    createCategoriyUseCase,
  );

  return createCategoryController;
};
