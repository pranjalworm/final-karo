import { StorageEnum } from "../../global/enums";
import { FinalStorage } from "./final-storage";

export const DefaultCategories = [
  'food',
  'movies',
  'games'
];

export default class CategoryService {

  // initialize with default categories if no categories are already set
  static init() {

    const data = FinalStorage.get(StorageEnum.Categories);
    const savedCategories: string[] = JSON.parse(data);

    if (!savedCategories || !savedCategories.length) {
      FinalStorage.set(StorageEnum.Categories, JSON.stringify(DefaultCategories), true);
    }
  }

  static retrieveAll() {

    return JSON.parse(FinalStorage.get(StorageEnum.Categories));
  }

  static create(category: string) {

    category = category.toLowerCase();

    const savedCategories: string[] = JSON.parse(FinalStorage.get(StorageEnum.Categories));

    if (!savedCategories || !savedCategories.length) {
      FinalStorage.set(StorageEnum.Categories, [category], true);

    } else if (!savedCategories.includes(category)) {
      savedCategories.push(category);
      FinalStorage.set(StorageEnum.Categories, savedCategories, true);
    }

  }

  static delete(category: string) {

    // delete category entry
    category = category.toLowerCase();

    const savedCategories: string[] = JSON.parse(FinalStorage.get(StorageEnum.Categories));

    if (savedCategories?.length) {

      const index = savedCategories.indexOf(category);
      index !== -1 ? savedCategories.splice(index, 1) : null;

      FinalStorage.set(StorageEnum.Categories, savedCategories, true);
    }

    // delete all options associated with that category
    FinalStorage.remove(category);

  }

  static saveCategoryOptions(options: string[], category: string) {

    FinalStorage.set(category, options, true);
  }
}